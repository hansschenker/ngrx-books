import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// app
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// ngrx store
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// ngrx effects
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
