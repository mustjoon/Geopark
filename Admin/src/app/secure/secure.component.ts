import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {MdlDialogModule, MdlSnackbaModule,MdlDialogReference} from 'angular2-mdl';
import { Overlay } from 'angular2-modal';
import {ModalComponent} from './Modal/modal';

import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewEncapsulation 
} from '@angular/core';

import {
  AgmCoreModule
} from 'angular2-google-maps/core';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */




@Component({
  selector: 'secure',
  templateUrl: 'secure.component.html',
  styleUrls: ['secure.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SecureComponent extends OnInit {
 
  

 
    public ngOnInit() { 

       
    }

   




}