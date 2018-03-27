import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServices } from '../services/logging.services';
import { AccountComponent } from '../account/account.component';
import { AccountServices } from '../services/account.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingServices]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private logService: LoggingServices, private accService:AccountServices){}

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    this.accService.addAccount(accountName,accountStatus)
    // this.logService.logStatusChange(accountStatus);
   
  }
  onDeleteAccount(accountName: string, accountStatus: string) {
  this.accService.dellAccount(accountName, accountStatus)
  }
}
