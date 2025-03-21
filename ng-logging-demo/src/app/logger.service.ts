import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private logServerUrl = 'http://localhost:3000/logs'; // Backend API

  constructor(private http: HttpClient) {}

  log(message: string, level: string = 'info') {
    const logEntry = {
      timestamp: new Date().toISOString(),
      level: level,
      message: message,
      app: 'angular-app'
    };

    console.log(logEntry); // Optional: Log to console
    this.http.post(this.logServerUrl, logEntry).subscribe();
  }

  error(message: string) {
    this.log(message, 'error');
  }

  warn(message: string) {
    this.log(message, 'warn');
  }

  info(message: string) {
    this.log(message, 'info');
  }
}
