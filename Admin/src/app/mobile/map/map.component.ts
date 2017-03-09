import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from './googleMaps.service';
import { Overlay } from 'angular2-modal';
 import {ModalComponent} from './Modal/modal.component';
import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef 
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
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: ['map.component.css'],
  providers: [ModalComponent,googleMapsService]
})
export class MapComponent extends OnInit {
 
  
   
    categories: FirebaseListObservable<any[]>;


    constructor(modal: ModalComponent,af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,private googleMapsService : googleMapsService){
        super();
       
        this.categories = af.database.list('/geopark_dev/config/Kategoriat');
        
    }

      
    public ngOnInit() { 
      
    }

    public onDialogShow(){

    }

    public onDialogHide(){

    }

   
    

    public closeDialog(){

    }

   

   


}


  