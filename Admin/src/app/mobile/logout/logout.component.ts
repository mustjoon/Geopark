import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ActivatedRoute} from "@angular/router";

import { MdlDialogService,
  MdlDialogReference,MdlSnackbarService,IOpenCloseRect } from 'angular2-mdl';
import {
  Component,
  OnInit,
  ViewContainerRef 
} from '@angular/core';
import {Router} from '@angular/router';
import {
  AgmCoreModule
} from 'angular2-google-maps/core';




@Component({
  selector: 'logout',
  templateUrl: 'logout.component.html',
  styleUrls: ['logout.component.css']

})
export class LogoutComponent extends OnInit {

	constructor(public af: AngularFire, public router: Router, private _routeParams: ActivatedRoute){
      super();
      this.af.auth.logout();
      this.router.navigateByUrl('login');
    }

	public ngOnInit() { 
      
    }

  public logout(){
    this.af.auth.logout();
    this.router.navigateByUrl('login');
  }
}
