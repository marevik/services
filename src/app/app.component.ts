import { Component, OnInit } from '@angular/core';
import { AccountServices } from './services/account.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  accounts=[];
  ngOnInit(): void {
    this.accounts=this.accServices.getAccounts();

  }
constructor (private accServices: AccountServices){ 

}


  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}



