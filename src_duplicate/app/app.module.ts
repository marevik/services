import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { ServicesDirective } from './services.directive';
import { ServicesComponent } from './services/services.component';
import { AccountService } from './services/account.service';
import { LoggingServices } from './services/logging.services';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    ServicesDirective,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccountService,LoggingServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
