import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule, MatInputModule, MatButtonModule, MatTableModule, MatSortModule, MatCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule , HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';
import { TokenInterceptorService } from './service/token-interceptor.service';
import { BoxstartComponent } from './components/boxstart/boxstart.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    PageNotFoundComponent,
    BoxstartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [AuthService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
