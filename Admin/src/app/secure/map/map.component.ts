import {AngularFire, FirebaseApp, FirebaseListObservable} from 'angularfire2';
import {googleMapsService} from './googleMaps.service';
import { Overlay } from 'angular2-modal';
import {ModalComponent} from './Modal/modal.component';

import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  Inject ,
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
 
  
    // GET DATA FROM FIREBASE
    items: FirebaseListObservable<any[]>;
    config: FirebaseListObservable<any[]>;
    categories: FirebaseListObservable<any[]>;


    map: any;
    waitingForPoint : boolean = false;
    guideTxt : string;
    markers : any[];
    modal: any;
    kuva: any;
    test: any;
    dialog: MdlDialogReference;
    TMP_currentMarkerLocation: any; // Tmp save clicked location here and wait for confirm
    new_targets : any[]; // Stores data for all the new location, this is pushed to Firebase once 'Save' is pushed
    afs: any;


    // FORM DATA
    target_category: string;
    target_name: string;
    target_info: string;
    target_img: any;
    target_video: any;
    target_latitude: string;
    target_longitude: string;
    target_previewDistance: any;
    storageRef: any;


    constructor(modal: ModalComponent, @Inject(FirebaseApp) firebaseApp: any, af: AngularFire, private dialogService: MdlDialogService,
    private snackbarService: MdlSnackbarService,private googleMapsService : googleMapsService){
        super();
        this.afs = af;
        this.items = af.database.list('/geopark_dev/');
        this.config = af.database.list('/geopark_dev/config');
        this.categories = af.database.list('/geopark_dev/config/Kategoriat');
        this.modal = modal; 
        this.new_targets = []; 
        this.storageRef = firebaseApp.storage().ref();
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

        this.config.subscribe(x => {
            for(var i=0; i<x.length; i++)
            {
                if(x[i].$key == "notifikaatio_etaisyys")
                    this.target_previewDistance = x[i].$value;
            }
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
        
        
        console.log(this.modal);
        this.modal.onDialogShow();
        // this.markers.push(marker);
        this.TMP_currentMarkerLocation = location;

        // Show coordinates
        this.target_latitude = location.lat();
        this.target_longitude = location.lng();
      }
    }
    
    public SaveNewLocationInfo()
    {

        if(this.target_category == undefined){
          alert("Anna kategoria.");
          return;
        }

        // Get data from the form and push to new_targets
        this.new_targets.push(
            {
                category :       this.target_category,
                name :           this.target_name,
                info:            this.target_info,
                img:             "KUVA",
                video:           "VIDEO",
                previewDistance: this.target_previewDistance,
                latitude:        this.TMP_currentMarkerLocation.lat(),
                longitude:       this.TMP_currentMarkerLocation.lng()
            }
        );

        document.getElementById("closeBtn").click();
       // this.target_category = this.target_name = this.target_info = this.target_img = this.target_video = "";
        
        var marker = new google.maps.Marker({
          position: this.TMP_currentMarkerLocation,
          map: this.map
        });
    }

    public FinalSave()
    {
      //let lol = this.afs.database.list('/geopark_dev/Kohteet/Puut/');
      let lol = this.afs.database.list('/geopark_dev/Kohteet/');

      //TODO
      //let exists = this.afs.database.list('/geopark_dev/Kohteet/Puut/paskaaon');
      var file = document.getElementById('filetoUpload');


      console.log( this.target_category);
      console.log(this.target_img);

          

      //this.afs.database.ref('/geopark_dev/Kohteet/puut/').set(this.new_targets);

      for(let i=0; i<this.new_targets.length; i++)
      {
        let subFolder = this.new_targets[i].category + "/";
        delete this.new_targets[i].category; 
        let name = this.new_targets[i].name;
        delete this.new_targets[i].name;
        let targets = this.new_targets;
        let ref =  this.storageRef;


         this.storageRef.child(name+"_image").put(this.target_img).then(function(snapshot) {
          
           targets[i].img = snapshot.downloadURL;
          
 
         });

        this.storageRef.child(name+"_vid").put(this.target_video).then(function(snapshot){
          targets[i].video = snapshot.downloadURL;
          console.log("SUB", subFolder);
          console.log("name", name);
          console.log(targets[i]);
          lol.update(subFolder + name,targets[i]);
          
        });
        


        


        

      }
       
      this.new_targets = [];
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


    onChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.target_img = files[0];
        console.log(this.target_img);
    }

    onVideoChange(event: EventTarget) {
        let eventObj: MSInputMethodContext = <MSInputMethodContext> event;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.target_video = files[0];
        console.log(this.target_video);
    }

    

    public UusiKohde(text){
     // this.showDialog();

      this.guideTxt = "Valitse piste kartalta!";
      this.waitingForPoint = true;

    }


}


  