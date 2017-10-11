import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes.component';
import { NoteDetailComponent } from './note-detail.component';
import { NoteService } from './note.service';
import { NoteSearchComponent } from './note-search.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        NoteDetailComponent,
        NotesComponent,
        NoteSearchComponent
    ],
    providers: [NoteService],
    bootstrap: [AppComponent]
})
export class AppModule { }
