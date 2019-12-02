import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'dashboard', loadChildren: "./main/main.module.ts#MainModule", canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: "./auth/auth.module.ts#AuthModule" },
  { path: 'onboarding', loadChildren: "./onboarding/onboarding.module.ts#OnboardingModule" },
  { path:'', pathMatch:'full', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
