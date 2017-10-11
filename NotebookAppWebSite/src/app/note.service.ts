import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { Note } from './note';

@Injectable()
export class NoteService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    //private notesUrl = 'api/notes';  // URL to web api
    private notesUrl = 'http://localhost:53617/api/notes';  // URL to web api

    constructor(private http: Http) { }

    getNotes(): Promise<Note[]> {
        return this.http.get(this.notesUrl)
            .toPromise()
            .then(response => response.json() as Note[])
            .catch(this.handleError);
    }

    getNote(id: string): Promise<Note> {
        const url = `${this.notesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json() as Note)
            .catch(this.handleError);
    }

    delete(id: string): Promise<void> {
        const url = `${this.notesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    create(name: string): Promise<Note> {
        return this.http
            //.post(this.notesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .post(this.notesUrl, new Note(JSON.stringify({ Body: name })), { headers: this.headers })
            .toPromise()
            //.then(res => res.json().data as Note)
            .then(res => new Note(JSON.stringify({ Body: name })))
            .catch(this.handleError);
    }

    update(note: Note): Promise<Note> {
        debugger;
        console.log(note);
        console.log(JSON.stringify(note));
        const url = `${this.notesUrl}/${note.Id}`;
        return this.http
            .put(url, JSON.stringify(note), { headers: this.headers })
            .toPromise()
            .then(() => note)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
