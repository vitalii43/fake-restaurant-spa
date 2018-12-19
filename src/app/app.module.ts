import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule, } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { environment } from 'src/environments/environment';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
