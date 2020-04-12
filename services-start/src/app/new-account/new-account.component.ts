import { Component, EventEmitter, Output } from '@angular/core';
import{LoggingService} from '../logging.service'
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
   constructor(private service:LoggingService, private accountservice:AccountService){
     this.accountservice.statusUpdated.subscribe((status:string)=>alert('New status:' + status));
   }
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountservice.onAddAccount(accountName,accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus  
    // });
    // const service= new LoggingService();
    // service.logStatusChange(accountStatus)
    // console.log('A server status changed, new status: ' + accountStatus);
    this.service.logStatusChange(accountStatus);
  }
}
