import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ListComponent } from './list/list.component';
import { CoinComponent } from './coin/coin.component';
import { RouterModule,Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    path:'',
    component: ListComponent
  },
  {
    path:'coin/:id',
    component: CoinComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CoinComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
