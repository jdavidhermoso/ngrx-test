import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent, LogoutComponent } from './components';
import { LoginEffects } from './effects/login.effects';
import { userSessionReducer } from './reducers';
import { LoginService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      userSession: userSessionReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([LoginEffects]),
    HttpClientModule,
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
