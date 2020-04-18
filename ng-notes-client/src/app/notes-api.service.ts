import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Note from './models/note';

@Injectable({
  providedIn: 'root'
})
export class NotesApiService {
  private baseUrl = environment.notesApiBaseUrl;
  private defaultUserId = 1; // Angular client

  constructor(private http: HttpClient) { }

  getNotes() {
    return this.http.get<Note[]>(`${this.baseUrl}api/notes`)
      .toPromise();
  }

  createNote(note: Note) {
    if (!note.authorId)
    {
      note.authorId = this.defaultUserId;
    }
    return this.http.post<Note>(`${this.baseUrl}api/notes`, note)
      .toPromise();
  }
}
