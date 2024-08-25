import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { PostsdashboardComponent } from './shared/components/postsdashboard/postsdashboard.component';
import { PostscardComponent } from './shared/components/postscard/postscard.component';
import { PostformComponent } from './shared/components/postform/postform.component';
import { PostComponent } from './shared/components/post/post.component';
import { PagenotfoundComponent } from './shared/components/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsdashboardComponent,
    PostscardComponent,
    PostformComponent,
    PostComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
