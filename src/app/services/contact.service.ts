import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class ContactService {

  url: string = "http://localhost:3000/contact"

  constructor(private httpClient: HttpClient) { }

  submitContact(contact: object): Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(contact)
    console.log("***", body)
    return this.httpClient.post(this.url, body, {'headers': headers}) 
  }
}
