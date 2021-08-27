import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { FormLandingComponent } from './components/form-landing/form-landing.component';
import { OutsandingComponent } from './components/outsanding/outsanding.component';
import { LandingBottomComponent } from './components/landing-bottom/landing-bottom.component';
import { FormLandingBottomComponent } from './components/form-landing-bottom/form-landing-bottom.component';
import { EstatesComponent } from './components/estates/estates.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    FormLandingComponent,
    OutsandingComponent,
    LandingBottomComponent,
    FormLandingBottomComponent,
    EstatesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
