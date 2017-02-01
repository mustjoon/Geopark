import {MdlDialogReference, MdlSnackbaModule,MdlTextFieldModule} from 'angular2-mdl';
import { Overlay } from 'angular2-modal';

import {
  Component,
  OnInit,
  ViewContainerRef,
  HostListener 
} from '@angular/core';

 @Component({
    selector: 'Modal',
    templateUrl: './modal.component.html'
  })
  export class ModalComponent {

    kuva: any;

    constructor() {
    }

    public savePoint(){
      console.log(this.kuva);
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



    public onDialogShow(dialogRef){
      console.log("OK");
    }

    public onDialogHide(){
      console.log("closed");
    }

    public login() {
    //  console.log('login', this.dialog);
    //  this.dialog.hide();
    }

    @HostListener('keydown.esc')
    public onEsc(): void {
      console.log(this.kuva);
     //   this.dialog.hide();
    }
  }