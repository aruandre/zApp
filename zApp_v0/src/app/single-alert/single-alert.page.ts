import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AllAlerts } from '../all-alerts/all-alerts.model';

@Component({
  selector: 'app-single-alert',
  templateUrl: './single-alert.page.html',
  styleUrls: ['./single-alert.page.scss'],
})
export class SingleAlertPage implements OnInit {

  //public singleAlert: { title: String, severity: String, age: String, ack: String };

  loadedAlert: AllAlerts;

  constructor(private route: ActivatedRoute, /*private navCtrl: NavController,*/ private dataService: DataService) {
    //this.singleAlert = { title: '', severity: '', age: '', ack: '' };
  }
    
  ngOnInit() {
    /*let identifier = this.route.snapshot.paramMap.get('id');
    console.log('id' + identifier);

    if(identifier != null){
      this.singleAlert = this.dataService.get(identifier);
    }*/

    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('alertId')) {
        //redirect
        return;
      }
      const alertId = paramMap.get('alertId');
      this.loadedAlert = this.dataService.getSingleAlert(alertId);
    });
  }

}
