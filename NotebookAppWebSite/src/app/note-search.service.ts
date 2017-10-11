import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Note } from './note';

@Injectable()
export class NoteSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Note[]> {
        return this.http
            .get(`http://localhost:53617/api/notes/?Body=${term}`)
            .map(response => response.json() as Note[]);
    }
}
