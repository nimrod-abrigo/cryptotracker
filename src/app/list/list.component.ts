import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  coins:Observable<any[]>;
  coin:Observable<any[]>;

  constructor(private appService:AppService){}

  ngOnInit() {
    this.coins = this.appService.getCoins();
  }

}
