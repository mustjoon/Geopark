import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MdlModule } from 'angular2-mdl';
import { VexDemoModule } from './vex-demo/vex-demo.module';
import { JSNativeDemoModule } from './js-native-demo/js-native-demo.module';
import { ForgotComponent } from './forgot';

import { AuthService } from './auth.service';
import { CanActivateViaAuthGuard} from './CanActivateViaAuthGuard'
import { CanActivateViaAuthGuardAdmin} from './CanActivateViaAuthGuardAdmin'

import {
  NgModule,
  ApplicationRef
} from '@angular/core';
import {
  removeNgStyles,
  createNewHosts,
  createInputTransfer
} from '@angularclass/hmr';
import {
  RouterModule,
  PreloadAllModules
} from '@angular/router';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';
//// FIREBASE
import { AngularFireModule } from 'angularfire2';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { LoginComponent } from './login';
import { LoginAdminComponent } from './login-admin';
import { NoContentComponent } from './no-content';


import { XLargeDirective } from './home/x-large';

import '../styles/styles.scss';
import '../styles/headings.css';


// Must export the config
export const firebaseConfig = {
    apiKey: "AIzaSyBre3CNxTAQmBUs8UDnii9-8YBaM-3KyZg",
    authDomain: "geopark-7e0a8.firebaseapp.com",
    databaseURL: "https://geopark-7e0a8.firebaseio.com",
    storageBucket: "geopark-7e0a8.appspot.com",
    messagingSenderId: "369902728048"
 };// FIREBASE END

// Application wide providers
const APP_PROVIDERS = [
  ...APP_RESOLVER_PROVIDERS,
  AppState,
  AuthService,
  CanActivateViaAuthGuard,
  CanActivateViaAuthGuardAdmin
 
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NoContentComponent,
    LoginComponent,
    LoginAdminComponent,
    XLargeDirective,
    ForgotComponent
   
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    BrowserModule, 
    NgbModule.forRoot(),       
    BootstrapModalModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    MdlModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, { useHash: true, preloadingStrategy: PreloadAllModules }),
     AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
    public appState: AppState
  ) {}

  public hmrOnInit(store: StoreType) {
    if (!store || !store.state) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    this.appState._state = store.state;
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.state;
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store: StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // save state
    const state = this.appState._state;
    store.state = state;
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues  = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store: StoreType) {
    console.log("HURRAA");
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}
