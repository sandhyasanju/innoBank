import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes,RouterModule} from '@angular/router';
import {routing} from './app.routing';
import {ModuleWithProviders} from '@angular/core';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { NewAccountComponent } from './components/admin/new-account/new-account.component';
import { UserLoginComponent } from './components/useraction/user-login/user-login.component';
import { UserRegisterComponent } from './components/useraction/user-register/user-register.component';
import { FundTransferComponent } from './components/payments/fund-transfer/fund-transfer.component';
import { AccountSummaryComponent } from './components/myaccounts/account-summary/account-summary.component';
import { MiniStatementComponent } from './components/statements/mini-statement/mini-statement.component';
import { DetailedStatementComponent } from './components/statements/detailed-statement/detailed-statement.component';






@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    NewAccountComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FundTransferComponent,
    AccountSummaryComponent,
    MiniStatementComponent,
    DetailedStatementComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
