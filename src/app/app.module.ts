import { EffectsModule } from '@ngrx/effects';
import { UserClient } from "./services/api/api.service";
import { MainModule } from "./main/main.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: [UserClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
