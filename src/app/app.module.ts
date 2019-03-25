import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { LoginFormComponent, LogoutComponent, SomeComponentComponent, LoaderComponent } from './components';
import { DataEffects, LoginEffects } from './effects';
import { LoadingEffects } from './effects/loading.effects';
import { userSessionReducer, dataReducer, loadingReducer } from './reducers';
import { DataService, LoginService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LogoutComponent,
    LoaderComponent,
    SomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      userSession: userSessionReducer,
      data: dataReducer,
      loading: loadingReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([LoginEffects, DataEffects, LoadingEffects])
  ],
  providers: [
    LoginService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
