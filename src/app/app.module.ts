import { EffectsModule } from "@ngrx/effects";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UserClient } from "./services/api/api.service";
import { MainModule } from "./main/main.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    FormsModule,
    MainModule,
    MatToolbarModule
  ],
  providers: [UserClient],
  bootstrap: [AppComponent]
})
export class AppModule {}
