import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  url: string = "https://powerful-gorge-86648.herokuapp.com/contact"

  constructor(private httpClient: HttpClient) { }

  submitContact(contact: object): Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(contact)
    return this.httpClient.post(this.url, body, {'headers': headers}) 
  }
}
