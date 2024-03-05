import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ms-tracker',
  templateUrl: './ms-tracker.component.html'
})
export class MsTrackerComponent implements OnInit {

  public msData: any;
  public isDisabled = true;
  public isEdit = false;

  constructor() { }

  ngOnInit(): void {
    this.msData = [
      {
        'slNo': '1',
        'ms': 'itaap-solutionsit-rms-event-mgmt',
        'dev': '1/11/2022',
        'sit': '1/11/2022',
        'uat': '1/11/2022',
        'acc': '1/11/2022',
        'tgl': '1/11/2022',
        'bgl': '1/11/2022',
        'kt_signoff': '1/11/2022',
        'postmancollection': 'view',
        'itd': 'view',
        'isad': 'view',
        'sm': 'Bharatesh',
        'tl': 'Pankaj',
        'd1': 'Soumendu',
        'd2': 'Rajendra',
      },
      {
        'slNo': '2',
        'ms': 'itaap-supplychainit-sofilecreation',
        'dev': '1/11/2022',
        'sit': '1/11/2022',
        'uat': '1/11/2022',
        'acc': '1/11/2022',
        'tgl': '1/11/2022',
        'bgl': '1/11/2022',
        'kt_signoff': '1/11/2022',
        'postmancollection': 'view',
        'itd': 'view',
        'isad': 'view',
        'sm': 'Bharatesh',
        'tl': 'Pankaj',
        'd1': 'Helen',
        'd2': 'Pradnya',
      },
    ];
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

  enableEdit(event: any) {
    this.isDisabled = !this.isDisabled;
    this.isEdit = !this.isEdit;
    console.log(event)
    // console.log(this.msData)
  }

}
