import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface LoginRequest{
  username: string;
  password: string;
}
 
export interface LoginResponse{
  token: string;
}
 
@Injectable({
  providedIn: 'root'
})
export class Auth {
 
  private apiUrl = 'http://localhost:8080/users';
 
  constructor(private http: HttpClient) {}
 
  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, credentials);
  }
 
}