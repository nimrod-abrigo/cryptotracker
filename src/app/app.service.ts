import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coin } from './coin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {

  constructor(private http:HttpClient) { }
  readonly ROOT_URL='https://api.coinmarketcap.com/v1/';

  coins:Observable<any[]>;

  getCoins(){
    this.coins = this.http.get<Coin[]>(this.ROOT_URL+'/ticker');
    return this.coins;
  }




}
