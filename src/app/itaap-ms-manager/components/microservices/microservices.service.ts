import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class MicroservicesService {

  constructor(private httpClient: HttpClient) { }

  readExcel(path: string) {
    this.httpClient.get(path, { responseType: 'blob' })
      .subscribe((data: any) => {
        const reader: FileReader = new FileReader();
        reader.readAsBinaryString(data);
        reader.onload = (e: any) => {

          const binarystr: string = e.target.result;
          const wb: XLSX.WorkBook = XLSX.read(binarystr, { type: 'binary' });

          const wsname: string = wb.SheetNames[0];
          const ws: XLSX.WorkSheet = wb.Sheets[wsname];

          const data = XLSX.utils.sheet_to_json(ws);
          console.log(data);
        };
      });
  }
}
