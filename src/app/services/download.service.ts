import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  url: string = "http://localhost:3000/download"

  constructor(private httpClient: HttpClient,) { }

  getFile(): Observable<Blob> {
    return this.httpClient.get(this.url, { responseType: 'blob'});
  }
}
