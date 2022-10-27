import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { BodyComponent } from './body/body.component';
import { GetStartComponent } from './body/get-start/get-start.component';
import { SolutionComponent } from './body/solution/solution.component';
import { OurFeatureComponent } from './body/our-feature/our-feature.component';
import { UseCasesComponent } from './body/use-cases/use-cases.component';
import { ContactComponent } from './body/contact/contact.component';
import { BottomComponent } from './bottom/bottom.component';
import { DescriptionComponent } from './bottom/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    BodyComponent,
    GetStartComponent,
    SolutionComponent,
    OurFeatureComponent,
    UseCasesComponent,
    ContactComponent,
    BottomComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
