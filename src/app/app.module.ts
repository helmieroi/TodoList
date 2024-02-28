import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderModule } from "./components/header/header.module" ;
import { LoginModule } from "./pages/login/login.module" ;
 
import { HttpClientModule } from '@angular/common/http';
 import { ThemeService } from './theme/theme.service';
import { GlobalDataService } from './context/globalData.servise'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    CommonModule, 
    HttpClientModule,
    RouterLink, 
    RouterLinkActive,
    RouterOutlet, 
    HeaderModule, 
    LoginModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }

 