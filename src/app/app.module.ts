import {
  NgModule
}
from '@angular/core';
import {
  BrowserModule
}
from '@angular/platform-browser';
import {
  AppComponent
}
from './app.component';
import {
  AppRoutingModule
}
from './app-routing.module';
import {
  FormsModule
}
from '@angular/forms';
@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}