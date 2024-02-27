import { Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component'
import {LayoutComponent} from "./components/layout/layout.component"
export const routes: Routes = [
    {path:"",redirectTo:"login",pathMatch:"full"},
    {path:"login",component:LoginComponent},
    {path:'LayoutComponent',
     component:LayoutComponent,
     children:[
        {
            path:'dashborad',
           component:LoginComponent
        }
     ]}
];
