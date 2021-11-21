import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class GetMainChartService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  getChart() {
    return this.httpClient.get('//localhost:3000/multi'); 
  }

}
