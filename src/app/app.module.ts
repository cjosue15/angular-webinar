import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TestPipe } from './pipes/test.pipe';
import { TestDirective } from './directives/test.directive';

@NgModule({
  declarations: [AppComponent, TestPipe, TestDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
