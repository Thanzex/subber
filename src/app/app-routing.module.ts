import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./main/main.module').then(m => m.MainModule), canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'onboarding', loadChildren: () => import('./onboarding/onboarding.module').then(m => m.OnboardingModule) },
  { path:'', pathMatch:'full', redirectTo:'/dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
