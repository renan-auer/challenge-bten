import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SigninService } from './pages/signin/signin.service';
import { UsersComponent } from './pages/users/users.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor.service';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    UsersComponent,
    NavBarComponent,
    CadastroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    SigninService,
    UserService,
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
