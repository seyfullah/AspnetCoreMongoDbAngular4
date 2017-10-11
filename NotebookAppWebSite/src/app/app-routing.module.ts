import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotesComponent } from './notes.component';
import { NoteDetailComponent } from './note-detail.component';
import { NoteSearchComponent } from './note-search.component';

const routes: Routes = [
  { path: '', redirectTo: '/notes', pathMatch: 'full' },
  { path: 'detail/:id', component: NoteDetailComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'search', component: NoteSearchComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
