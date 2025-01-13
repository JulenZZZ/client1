import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private httpclient : HttpClient) { }

  private apiUrl = "https://localhost:7157/api/email/send";

  sendEmail(emailData: { to: string; subject: string; body: string }): Observable<any> {
    return this.httpclient.post(this.apiUrl, emailData, {
      headers: { 'Content-Type': 'application/json'}
    });
  }
}
