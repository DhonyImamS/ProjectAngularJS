import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { TestProjectComponent } from './page/test-project/test-project.component';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { ModuleComponent } from './module/module.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestProjectComponent,
    ModuleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes,{ useHash: false }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
