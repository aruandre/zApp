import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { AllAlerts } from './all-alerts.model';

@Component({
  selector: 'app-all-alerts',
  templateUrl: './all-alerts.page.html',
  styleUrls: ['./all-alerts.page.scss'],
})
export class AllAlertsPage implements OnInit {
  alerts: AllAlerts[];

  constructor(/*private navCtrl: NavController,*/ private dataService: DataService) { }

  ngOnInit(){
    this.alerts = this.dataService.loadAll();
  }
  
  /*getSingleAlert(singleAlert){
    this.navCtrl.navigateForward(['/single-alert', {id: singleAlert.title}]);
  }*/

}