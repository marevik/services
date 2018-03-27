import { LoggingServices } from "./logging.services";
import  { Injectable } from "@angular/core";

@Injectable()
export class AccountServices {


constructor (private loggingServices:LoggingServices ){}

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

      getAccounts (){
          return this.accounts
      }
      setStatus(id:number,status:string){
        this.accounts[id].status = status;
        this.loggingServices.logStatusChange(status);
      }
    addAccount(name:string,status:string){
        this.accounts.push({name:name,status:status})
    }

    dellAccount(name:string,status:string){
      this.accounts.splice(1,1)
  }
}
