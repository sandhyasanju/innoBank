import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import { UserLoginComponent } from './components/useraction/user-login/user-login.component';
const appRoutes: Routes=[

   {
    path:'',
    component:UserLoginComponent
  }
  // {
  //   path:'',
  //   component:AppComponent
  // }
]

export const routing :ModuleWithProviders =RouterModule.forRoot(appRoutes);
