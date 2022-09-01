import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VregisterComponent } from './vregister/vregister.component';
import { PlanComponent } from './plan/plan.component';
import { ClaimstatusComponent } from './claimstatus/claimstatus.component';
import { ClaimComponent } from './claim/claim.component';
import { UserpageComponent } from './userpage/userpage.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PremiumComponent } from './premium/premium.component';

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"Register",component:RegisterComponent},
  {path:"Vregister",component:VregisterComponent},
  {path:"Login/Register",component:RegisterComponent},
  {path:"Login/:id/Userpage/Vregister",component:VregisterComponent},
  {path:"Login/:id/Userpage",component:UserpageComponent},
  {path:"Plan",component:PlanComponent},
  {path:"Login/:id/Vregister/:reg_no/:model/Plan",component:PlanComponent},
  {path:"claimapproval",component:ClaimstatusComponent},
  {path:"Login/:id/Userpage/Claim",component:ClaimComponent},
  {path:"Userpage",component:UserpageComponent},
  {path:"",component:HomeComponent},
  {path:"home/Register",component:RegisterComponent},
  {path:"home/Login",component:LoginComponent},
  {path:"Login/:id/Userpage/Plan",component:PlanComponent},
  {path:"Login/:id/Userpage/:id/Claim",component:ClaimComponent},
  {path:"premium",component:PremiumComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
