import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingServices } from '../services/logging.services';
import { AccountServices } from '../services/account.services';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers:[LoggingServices]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor(private accountServices: AccountServices){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    this.accountServices.setStatus(this.id,status);
    
    //this.logService.logStatusChange(status);
    }

}
