import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private httpClient: HttpClient) { }

  getCoronaWorld() {
    return this.httpClient.get('https://coronavirusupdatevn.herokuapp.com/api/public/getAllDataCoronaByDate?date=2020-2-7');
  }

  getCoronaVN() {
    return this.httpClient.get('https://coronavirusupdatevn.herokuapp.com/api/public/getAllDataCoronaByDateInVietNam?date=2020-2-7');
  }

}
