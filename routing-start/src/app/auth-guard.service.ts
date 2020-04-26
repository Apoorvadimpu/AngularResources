import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
// import { promise } from "protractor";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { promise } from "protractor";




@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
    constructor(private authservice: AuthService, private router: Router){}
    canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
 return this.authservice.Authenticaton().then(
    (authenticated : boolean) =>
    {
        if (authenticated){
            return true;
        }
        else{
            this.router.navigate(['/']);
            console.log("not routed");
        }
    }
)
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
        return this .canActivate(route,state);

    }

}