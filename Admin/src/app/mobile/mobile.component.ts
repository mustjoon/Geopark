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
  selector: 'mobile',
  templateUrl: 'mobile.component.html',
  styleUrls: ['mobile.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MobileComponent extends OnInit {

  kohteet: any;
   
   constructor(af: AngularFire){
     super();
     this.kohteet = af.database.list('geopark_dev/Kohteet');
   }
  

 
    public ngOnInit() { 

      console.log(this.kohteet);
       
    }

   




}