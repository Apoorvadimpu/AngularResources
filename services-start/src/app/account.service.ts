import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService{

constructor(private loggingservice:LoggingService){}

statusUpdated= new EventEmitter<string>();
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

    onAddAccount(name:string,status:string){
this.accounts.push({name:name,status:status});
this.loggingservice.logStatusChange(status);
    }

    OnUpdatteAccount(id:number,status:string){
       this.accounts[id].status=status;
       this.loggingservice.logStatusChange(status);
    }
    
}