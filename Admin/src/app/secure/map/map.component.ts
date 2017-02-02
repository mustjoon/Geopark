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
    TMP_currentMarkerLocation: any; // Tmp save clicked location here and wait for confirm
    new_targets : any[];
    afs: any;
    
    constructor(modal: ModalComponent, af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,private googleMapsService : googleMapsService){
        super();
        this.afs = af;
        this.items = af.database.list('/geopark_dev/');
        this.modal = modal; 
        this.new_targets = []; 
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
      // Jos "Tee uusi kohde"-nappia painettu
      if(this.waitingForPoint == true){
          
        document.getElementById("open").click();
        
        var marker = new google.maps.Marker({
          position: location,
          map: this.map
        });
        
        console.log(this.modal);
        this.modal.onDialogShow();
       // this.markers.push(marker);
        this.TMP_currentMarkerLocation = location;
      }
    }
    
    public SaveNewLocationInfo()
    {
        // Get data from the form and push to new_targets
        this.new_targets.push(
            {
                info: "Mahtaakohan tässä toimia ääkköset sun muut? Sen kohta näkee. Kääk! @£$€{[]} 123456789 abcdefghijklmnopqrstuvwxyzåäö",
                img: "www.google.com",
                video: "www.youtube.com",
                latitude: this.TMP_currentMarkerLocation.lat(),
                longitude: this.TMP_currentMarkerLocation.lng()
            }
        );
        
       let lol = this.afs.database.list('/geopark_dev/Kohteet/Puut/' + "Testi NIMI");
       
       this.items.child("Kusipaskaa").set("njopmoknonojbipnojpn");
        //this.afs.database.ref('/geopark_dev/Kohteet/puut/').set(this.new_targets);
       //lol.push(this.new_targets[0]);
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


  