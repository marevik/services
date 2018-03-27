import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ServicesDirective } from './services.directive';
import { ServicesComponent } from './services/services.component';
import { AccountServices } from './services/account.services';
import { LoggingServices } from './services/logging.services';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ServicesDirective,
    ServicesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountServices,LoggingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
