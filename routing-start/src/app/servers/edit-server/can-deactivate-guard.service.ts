import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

 export interface CanComponentDeactivate{
     canDeactivate :() => Observable<boolean> | Promise<boolean> | boolean;
 }

export class CanDecativateGuard implements CanDeactivate<CanComponentDeactivate>  {
canDeactivate(component:CanComponentDeactivate, CurrentRoute:ActivatedRouteSnapshot,currentstate:RouterStateSnapshot,nextState?:RouterStateSnapshot):Observable<boolean> | Promise<boolean> | boolean{
    return component.canDeactivate()

    // if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
    //     // return component.canDeactivate()
    //     return true;
    // } else {
    //     return false;
    // }
}
 }