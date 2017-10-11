import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { Note }                from './note';
import { NoteService } from './note.service';
/*
const NOTES: Note[] = [
    { Id: '11', Body: 'Mr. Nice', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '12', Body: 'Narco', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '13', Body: 'Bombasto', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '14', Body: 'Celeritas', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '15', Body: 'Magneta', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '16', Body: 'RubberMan', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '17', Body: 'Dynama', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '18', Body: 'Dr IQ', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '19', Body: 'Magma', UpdatedOn: '', CreatedOn: '', UserId: 1 },
    { Id: '20', Body: 'Tornado', UpdatedOn: '', CreatedOn: '', UserId: 1 }
];*/

@Component({
  selector: 'my-notes',
  templateUrl: './notes.component.html',
  styleUrls: [ './notes.component.css' ]
})
export class NotesComponent implements OnInit {
  //notes = NOTES;
  notes: Note[];
  selectedNote: Note;

  constructor(
    private noteService: NoteService,
    private router: Router,
  ) { }

  getNotes(): void {
      this.noteService
          .getNotes()
          .then(notes => this.notes = notes);
  }
    
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.noteService.create(name)
      .then(note => {
        this.notes.push(note);
        this.selectedNote = null;
      });
  }

  delete(note: Note): void {
      this.noteService
        .delete(note.Id.toString())
        .then(() => {
          this.notes = this.notes.filter(h => h !== note);
          if (this.selectedNote === note) { this.selectedNote = null; }
        });
  }

  ngOnInit(): void {
      this.getNotes();
  }

  onSelect(note: Note): void {
      this.selectedNote = note;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedNote.Id]);
  }
}


