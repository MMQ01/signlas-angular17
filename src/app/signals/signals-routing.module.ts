import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { UserInfopageComponent } from './pages/userInfopage/userInfopage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';

const routes: Routes = [
  {
    path:'',
    component:SignalsLayoutComponent,
    children:[
      {path:'counter', component:CounterPageComponent},
      {path:'user-info', component:UserInfopageComponent},
      {path:'properties', component: PropertiesPageComponent},
      {path:'**', redirectTo: 'counter'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
