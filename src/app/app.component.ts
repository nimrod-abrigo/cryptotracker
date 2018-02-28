import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coin } from './coin';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  readonly ROOT_URL='https://api.coinmarketcap.com/v1/';

  posts:Observable<any[]>;

  ngOnInit() {
    this.getPosts();
  }

  constructor(private http:HttpClient){}

  getPosts(){
    this.posts = this.http.get<Coin[]>(this.ROOT_URL+'/ticker');
    
  }
}
