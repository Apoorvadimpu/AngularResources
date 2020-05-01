import { ActivatedRoute, RouterStateSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "./servers.service";
import { Injectable } from "@angular/core";

interface server{ 
id:number;
name:string;
status:string;
}

@Injectable()
export class ResolverService implements Resolve<server>{

    constructor(private serverservice:ServersService){}
    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: RouterStateSnapshot): server | Observable<server> | Promise<server> {
        return this.serverservice.getServer(+route.params['id']);
    }


}