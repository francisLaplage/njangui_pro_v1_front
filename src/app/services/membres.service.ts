import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'
import { Membres } from '../interfces/membres';

@Injectable({
  providedIn: 'root'
})
export class MembresService{

  private url = 'http://phoenix.eu-west-3.elasticbeanstalk.com';
  
  constructor(private httpClient: HttpClient) { }
  
  public getMembres() {
    return this.httpClient.get<Membres>(`${this.url}/api/membres`);
  }
  public addMembre(objMembre : Membres) {
    return this.httpClient.post<Membres>(`${this.url}/api/membres/add`,objMembre);
  }
}
