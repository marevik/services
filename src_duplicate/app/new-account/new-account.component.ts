import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServices } from '../services/logging.services';
import { AccountService } from '../services/account.service';
import { AccountComponent } from '../account/account.component';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  constructor(private logService: LoggingServices, private accountService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }
}
