import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Promise } from 'q';
import { stringToKeyValue } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { IfStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PuppyApiService {
  apiURL = 'http://www.recipepuppy.com/api/';


  constructor(private http: HttpClient) { }

  getRecipe(text: string, mode: string) {
    let query = '';
    if (mode === 'recipes') {
      query += '?q=' + text;
    } else if (mode === 'ingredients') {
      query += '?i=' + text;
    }

    return this.http.get(this.apiURL + query).toPromise();
  }
}
