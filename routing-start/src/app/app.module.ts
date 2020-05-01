import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRouting } from './app-routing.module';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http'; 
import { AuthGuard } from './auth-guard.service';
import { CanDecativateGuard } from './servers/edit-server/can-deactivate-guard.service';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServersComponent,
    UserComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
   AppRouting,
    HttpClientModule
   
  ],
  exports:[RouterModule],
  providers: [ServersService,AuthService,AuthGuard,CanDecativateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
