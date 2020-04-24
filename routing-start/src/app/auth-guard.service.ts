import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
// import { promise } from "protractor";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { promise } from "protractor";




@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authservice: AuthService, private route: Router){}
    canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
this.authservice.Authenticaton().then(
    (authenticated : boolean) =>
    {
        if (authenticated){
            return true;
        }
        else{
            this.route.navigate(['/']);
        }
    }
)
    }

}