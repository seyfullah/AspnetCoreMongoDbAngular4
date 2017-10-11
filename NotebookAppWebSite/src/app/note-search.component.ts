import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { NoteSearchService } from './note-search.service';
import { Note } from './note';

@Component({
  selector: 'note-search',
  templateUrl: './note-search.component.html',
  styleUrls: [ './note-search.component.css' ],
  providers: [NoteSearchService]
})
export class NoteSearchComponent implements OnInit {
  notes: Observable<Note[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private noteSearchService: NoteSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.notes = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.noteSearchService.search(term)
        // or the observable of empty notes if there was no search term
        : Observable.of<Note[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Note[]>([]);
      });
  }

  gotoDetail(note: Note): void {
    let link = ['/detail', note.Id];
    this.router.navigate(link);
  }
}
