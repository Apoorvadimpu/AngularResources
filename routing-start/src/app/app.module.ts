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



const approute: Routes=[
  { path: '', component: HomeComponent },
  {
  path:'users', component:UsersComponent,
},
{path:'home', component:HomeComponent},
{path:'servers', component:ServersComponent}

]


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
    ServerComponent
  ],
  imports: [
    BrowserModule,  
    FormsModule,
    RouterModule.forRoot(approute)
  ],
  exports:[RouterModule],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
