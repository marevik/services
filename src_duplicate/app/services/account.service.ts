import { LoggingServices } from "./logging.services";
import { Injectable } from "@angular/core";
@Injectable()
export class AccountService {
   
    constructor(private loggingService:LoggingServices){}
    accounts = [
      {
        name: 'Master Account',
        status: 'active'
      },
      {
        name: 'Testaccount',
        status: 'inactive'
      },
      {
        name: 'Hidden Account',
        status: 'unknown'
      }
    ];

    getAccounts(){
        return this.accounts;
    }
    setStatus(id:number, status:string){
        this.accounts[id].status=status;
        this.loggingService.logStatusChange(status);
    }
  
    addAccount(name:string, status:string){
        this.accounts.push({name:name,status:status})
    }
}