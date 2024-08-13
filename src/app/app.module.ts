import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './store/reducers/user.reducer';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserEffects } from './store/effects/user.effects';
import { NgxPaginationModule } from 'ngx-pagination';
import { BoxShadowDirective } from './directives/box-shadow.directive';
import { ScaleDirective } from './directives/scale.directive';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListComponent,
    UserDetailsComponent,
    BoxShadowDirective,
    ScaleDirective,
    LoadingBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgxPaginationModule,
    StoreModule.forRoot({ users: userReducer }), 
    EffectsModule.forRoot([UserEffects]), 
  ],
  providers: [
    provideHttpClient(
      withInterceptors([
        loadingInterceptor
      ])
    ),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
