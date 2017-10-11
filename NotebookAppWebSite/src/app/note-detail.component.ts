import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Location }                 from '@angular/common';

import { Note }        from './note';
import { NoteService } from './note.service';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: [ './note-detail.component.css' ]
})
export class NoteDetailComponent implements OnInit {
  note: Note;

  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    //  debugger;
    //this.noteService
    //    .getNote('1948469205')
    //    .then(note => this.note = note);
    //this.route.paramMap
    //  .switchMap((params: ParamMap) => this.noteService.getNote((+params.get('Id')).toString()))
    //  .subscribe(note => this.note = note);
    this.route.params
        .switchMap((params: Params) => this.noteService.getNote((+params['id']).toString()))
        .subscribe((note: Note) => this.note = note);
  }

  save(): void {
    debugger;
    this.noteService.update(this.note)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
