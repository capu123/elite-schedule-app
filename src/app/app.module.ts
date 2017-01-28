import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';

import { MyTeamsPage, GamePage, TeamsPage, TeamDetailPage, TournamentsPage } from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage, GamePage, TeamDetailPage, TeamsPage, TournamentsPage 
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage, GamePage, TeamsPage, TeamDetailPage, TournamentsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
