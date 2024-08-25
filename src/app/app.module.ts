import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostsdashboardComponent } from './shared/components/postsdashboard/postsdashboard.component';
import { PostscardComponent } from './shared/components/postscard/postscard.component';
import { PostformComponent } from './shared/components/postform/postform.component';
import { PostComponent } from './shared/components/post/post.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './shared/components/confirm/confirm.component';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsdashboardComponent,
    PostscardComponent,
    PostformComponent,
    PostComponent,
    PagenotfoundComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
