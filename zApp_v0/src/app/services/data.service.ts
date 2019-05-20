import { Injectable } from '@angular/core';
import { AllAlerts } from '../all-alerts/all-alerts.model';
//import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private alerts: Array<{ id: string, title: String, age: String, severity: String, ack: String }> = [];
  private alerts: AllAlerts[] = [
    { id: '1', title: 'CPU Load 95% on app-srv', age: '1m 5s', severity: 'Average', ack: 'No' },
    { id: '2', title: 'Free disk space less than 20%...', age: '3h 15s', severity: 'Average', ack: 'No' },
    { id: '3', title: 'Zabbix agent on log-srv unreac...', age: '15m', severity: 'High', ack: 'No' },
    { id: '4', title: 'log-srv is unavailable by ICMP', age: '15m', severity: 'High', ack: 'No' }   
  ];

  constructor(/*private navCtrl: NavController*/) { }
  loadAll(){
    console.log('loading data');
    /*this.alerts.push(
      { id: '1', title: 'CPU Load 95% on app-srv', age: '1m 5s', severity: 'Average', ack: 'No' },
      { id: '2', title: 'Free disk space less than 20%...', age: '3h 15s', severity: 'Average', ack: 'No' },
      { id: '3', title: 'Zabbix agent on log-srv unreac...', age: '15m', severity: 'High', ack: 'No' },
      { id: '4', title: 'log-srv is unavailable by ICMP', age: '15m', severity: 'High', ack: 'No' }
      );*/
      return [...this.alerts];
  }

  /*getSingleAlert(singleAlert){
    this.navCtrl.navigateForward(['/single-alert', {id: singleAlert.title}]);
  }*/

  getSingleAlert(alertId: string){
    return {
      ...this.alerts.find(alert => {
        return alert.id === alertId;
      })
    };
  }

  /*get(id){
    return this.alerts.filter(x => x.title === id)[0];
  }*/
}
