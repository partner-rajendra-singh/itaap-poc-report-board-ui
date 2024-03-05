import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ConnectivityService } from '../kubernetes.service';

@Component({
  selector: 'app-connectivity-history',
  templateUrl: './connectivity-history.component.html'
})
export class ConnectivityHistoryComponent implements OnInit {

  public display = false;
  public history: any;
  public viewResults: any;
  sortField = "port";

  @Output() selectedRow = new EventEmitter<any>();

  constructor(private connectivityService: ConnectivityService) { }

  ngOnInit(): void {
    this.getAllHistory();
  }

  onRowSelect(event: any) {
    this.showResults(event.data.id);
  }

  public getAllHistory() {
    this.connectivityService
      .getAllHistory()
      .subscribe(
        (response) => {
          this.history = response;
          console.log(this.history);
        })
  }

  showResults(historyItemID: any) {
    this.display = !this.display;
    console.log(historyItemID)
    this.getHistoryById(historyItemID);
  }

  getHistoryById(historyItemID: any) {
    this.connectivityService.getHistoryById(historyItemID).subscribe(response => {
      this.selectedRow.emit(response);
      this.viewResults = response;
      console.log(this.viewResults)
    });
  }

}
