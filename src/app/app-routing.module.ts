import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './service/auth.guard';
import { RegisterComponent } from './components/register/register.component';
import { BaseTreeControl } from '@angular/cdk/tree';
import { BoxstartComponent } from './components/boxstart/boxstart.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'login'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},//,canActivate:[AuthGuard]},
  {path:"boxstart",component:BoxstartComponent},
  // {path:"entery",component:EnteryComponent,canActivate:[AuthGuard]},
  // {path:"view",component:ViewComponent,canActivate:[AuthGuard]},
  // {path:"start",component:StartComponent,canActivate:[AuthGuard]},
  // {path:"serialbox",component:SerialBoxComponent,canActivate:[AuthGuard]}
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [LoginComponent,HomeComponent]