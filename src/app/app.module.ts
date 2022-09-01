import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { VregisterComponent } from './vregister/vregister.component';
import { PlanComponent } from './plan/plan.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { ClaimComponent } from './claim/claim.component';
import { UserpageComponent } from './userpage/userpage.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PremiumComponent } from './premium/premium.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VregisterComponent,
    PlanComponent,
    ClaimstatusComponent,
    ClaimComponent,
    UserpageComponent,
    HomeComponent,
    NavbarComponent,
    PremiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
