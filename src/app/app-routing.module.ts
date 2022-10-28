import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewpolicyComponent } from './component/addnewpolicy/addnewpolicy.component';
import { AllPoliciesComponent } from './component/all-policies/all-policies.component';
import { EditpolicyComponent } from './component/editpolicy/editpolicy.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: "allpolicies",
    component: AllPoliciesComponent
  },
  {
    path: "addnewpolicy",
    component: AddnewpolicyComponent
  },
  {
    path: "editpolicy/:pid",
    component: EditpolicyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
