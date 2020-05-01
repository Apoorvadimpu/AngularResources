import { Router, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { AuthGuard } from "./auth-guard.service";
import { CanDecativateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";




const approute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    {
        path: 'users', component: UsersComponent, children: [
            {
                path: ':id/:name', component: UserComponent
            }
        ]
    },

    {
        path: 'servers', 
        // canActivate:[AuthGuard] ,
        canActivateChild:[AuthGuard],
        component: ServersComponent,
         children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/:edit', component: EditServerComponent, canDeactivate:[CanDecativateGuard]}
        ]
    },
    // { path: 'pageNotFound', component: PageNotFoundComponent },
    { path: 'pageNotFound', component: ErrorPageComponent , data:{message:'Static Error page not found'} },
    { path: '**', redirectTo: 'pageNotFound' }

]

@NgModule({
    imports: [
        RouterModule.forRoot(approute)],
        exports:[RouterModule]
})
export class AppRouting{

}