import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { MainModule } from './main/main.module';
import { AuthModule } from './auth/auth.module';
import { OnboardingModule } from './onboarding/onboarding.module';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => MainModule, canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => AuthModule },
  { path: 'onboarding', loadChildren: () => OnboardingModule },
  { path:'', pathMatch:'full', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
