import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { RouterModule } from '@angular/router';
import { SignalsRoutingModule } from './signals-routing.module';
import { SideMenuComponent } from "./components/sideMenu/sideMenu.component";
import { CounterPageComponent } from './pages/counterPage/counterPage.component';
import { UserInfopageComponent } from './pages/userInfopage/userInfopage.component';
import { PropertiesPageComponent } from './pages/propertiesPage/propertiesPage.component';
import { FormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        SignalsLayoutComponent,
        CounterPageComponent,
        UserInfopageComponent,
        PropertiesPageComponent,
        SideMenuComponent

    ],
    imports: [
        CommonModule,
        RouterModule,
        SignalsRoutingModule,
        RouterModule,
    ]
})
export class SignalsModule { }
