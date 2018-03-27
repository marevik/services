import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { LoggingServices } from '../services/logging.services';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[ ]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  constructor( private accountService:AccountService){}

  onSetTo(status: string) {
    // this.accountService
    this.accountService.setStatus(this.id, status);    
    }

}
