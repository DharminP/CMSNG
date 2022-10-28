import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllPoliciesComponent } from './component/all-policies/all-policies.component';
import { AddnewpolicyComponent } from './component/addnewpolicy/addnewpolicy.component';
import { EditpolicyComponent } from './component/editpolicy/editpolicy.component';
import { HomeComponent } from './component/home/home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AllPoliciesComponent,
    AddnewpolicyComponent,
    EditpolicyComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
