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
 
  
    items: FirebaseListObservable<any[]>;
    map: any;
    waitingForPoint : boolean = false;
    guideText : string;
    markers : any[];
    modal: any;
    kuva: any;
    test: any;
    dialog: MdlDialogReference;


    constructor(modal: ModalComponent,af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,private googleMapsService : googleMapsService){
        super();
        this.items = af.database.list('/Kohteet');
        this.modal = modal;  
    }

      
    public ngOnInit() { 
       var mapProp = {
              center: new google.maps.LatLng(51.508742, -0.120850),
              zoom: 5,
              mapTypeId: google.maps.MapTypeId.ROADMAP
          };

         this.map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
         let map = this.map;
       
         let SLPLayer = this.googleMapsService.getSLPlayer(map);
         this.map.overlayMapTypes.push(SLPLayer);
     
          let temp = this;
          map.addListener("click", function(e){
            temp.addMarker(e.latLng);
          }); 
    }

    public onDialogShow(){

    }

    public onDialogHide(){

    }

   
    

    public closeDialog(){

    }

    public addMarker(location) {
      if(this.waitingForPoint == true){
        document.getElementById("open").click();
        var marker = new google.maps.Marker({
          position: location,
          map: this.map
        });
        console.log(this.modal);
        this.modal.onDialogShow();
        this.markers.push(marker);
      
      }
    }

    public readFile(event) {
      let kuva = this.kuva; 
      if (event.target.files && event.target.files[0]) {
        var FR= new FileReader();
        FR.onload = function(e:any) {
          kuva = e.target.result;
        };       
        FR.readAsDataURL( event.target.files[0] );
      }
    }

    

    public UusiKohde(text){
     // this.showDialog();

      this.guideText = text;
      this.waitingForPoint = true;

    }


}


  