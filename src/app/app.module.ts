import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirePerformanceModule } from '@angular/fire/performance'
import { AngularFireMessagingModule } from '@angular/fire/messaging'
import { AngularFireFunctionsModule } from '@angular/fire/functions'

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';
import { OnboardingModule } from './onboarding/onboarding.module';
import { environment } from 'src/environments/environment';
import { AuthService } from './services/auth.service';
import { AngularFireAuthGuardModule } from '@angular/fire/auth-guard';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireFunctionsModule,
    AngularFireMessagingModule,
    AngularFirePerformanceModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    MainModule,
    OnboardingModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
