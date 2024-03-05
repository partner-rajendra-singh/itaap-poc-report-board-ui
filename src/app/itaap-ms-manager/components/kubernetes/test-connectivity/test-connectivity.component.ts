import { Component, OnInit } from '@angular/core';
import { ConnectivityHistoryComponent } from '../connectivity-history/connectivity-history.component';
import { ConnectivityService } from '../kubernetes.service';

@Component({
  selector: 'app-test-connectivity',
  templateUrl: './test-connectivity.component.html',
  providers: [ConnectivityHistoryComponent]
})
export class TestConnectivityComponent implements OnInit {

  public host: string = "";
  public port: string = "";
  public connectionResult: any;
  public isError = false;

  visibleProgressBar: boolean = false;

  constructor(private connectivityService: ConnectivityService,
    private history: ConnectivityHistoryComponent) { }

  ngOnInit(): void {
  }

  public testConnection() {
    this.visibleProgressBar = true;
    if (this.host === "" || this.port === "") {
      this.isError = !this.isError;
      return;
    }
    let data = {
      "host": this.host,
      "port": this.port
    }

    this.connectivityService.testConnection(data)
      .subscribe((response) => {
        this.visibleProgressBar = false;
        this.connectionResult = response;
        console.log(this.connectionResult);
        this.host = "";
        this.port = "";
        this.history.getAllHistory();
      },
        (error) => {
          console.log(error);
          this.visibleProgressBar = false;
        });
  }

  populateResults(row: any) {
    this.connectionResult = row;
  }

}
