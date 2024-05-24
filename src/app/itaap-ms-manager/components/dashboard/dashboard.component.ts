import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService, PrimeNGConfig } from 'primeng/api';
import { Files, Task } from '../../api/models';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [MessageService, ConfirmationService]
})
export class DashboardComponent implements OnInit {
  [x: string]: any;

  public PlatformReportData: any;
  public trackingData: any;

  polarOptions: any;
  polarData: any;

  lineData: any;
  lineOptions: any;

  allCompletedTasks: Task[] = [];
  allInProgressTasks: Task[] = [];
  allOverDueTasks: Task[] = [];
  allBlockedTasks: Task[] = [];

  constructor(private tasksService: TasksService,
    private messageService: MessageService,
    private config: PrimeNGConfig) { }

  ngOnInit(): void {

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');

    this.lineData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-500'),
          borderColor: documentStyle.getPropertyValue('--primary-500'),
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 1090],
          fill: false,
          backgroundColor: documentStyle.getPropertyValue('--primary-200'),
          borderColor: documentStyle.getPropertyValue('--primary-200'),
          tension: .4
        }
      ]
    };
    this.lineOptions = {
      plugins: {
        legend: {
          labels: {
            fontColor: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
      }
    };
    this.polarData = {
      datasets: [{
        data: [
          11,
          16,
          7,
          13
        ],
        backgroundColor: [
          documentStyle.getPropertyValue('--indigo-500'),
          documentStyle.getPropertyValue('--purple-500'),
          documentStyle.getPropertyValue('--teal-500'),
          documentStyle.getPropertyValue('--orange-500')
        ],
        label: 'My dataset'
      }],
      labels: [
        'Indigo',
        'Purple',
        'Teal',
        'Orange'
      ]

    };
    this.polarOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        r: {
          grid: {
            color: surfaceBorder
          }
        }
      }
    };
    this.PlatformReportData = [
      {
        'slNo': '1',
        "platform": "itaap-supplychainit",
        "DEV_TEST": "1",
        "ACC": "1",
        "PROD": "1"
      },
      {
        'slNo': '2',
        "platform": "itaap-solutionsit",
        "DEV_TEST": "3",
        "ACC": "2",
        "PROD": "1"
      }
    ];
    this.trackingData = [
      {
        'slNo': '1',
        "issue": "Ingress issue",
        "desc": "Test Desc",
        "blocker": "No",
        "pending_with": "Pankaj",
        "eta": new Date()
      },
      {
        'slNo': '2',
        "issue": "CD pipeline issue",
        "desc": "Test Desc",
        "blocker": "No",
        "pending_with": "MS Support",
        "eta": new Date()
      }
    ];

    this.populateTasks();
    this.populateMicroservices();
    // this.getAllFiles();

  }

  populateTasks() {
    this.tasksService.getTasksByStatus('C').subscribe((response: Task[]) => { this.allCompletedTasks = response; }, (error: any) => { console.log(error); });
    this.tasksService.getTasksByStatus('O').subscribe((response: Task[]) => { this.allOverDueTasks = response; }, (error: any) => { console.log(error); });
    this.tasksService.getTasksByStatus('B').subscribe((response: Task[]) => { this.allBlockedTasks = response; }, (error: any) => { console.log(error); });
    this.tasksService.getTasksByStatus('P').subscribe((response: Task[]) => { this.allInProgressTasks = response; }, (error: any) => { console.log(error); });
  }
  populateMicroservices() {

  }

  getAllFiles() {
    this.tasksService
      .getAllFiles()
      .subscribe(
        (response: Files[]) => {
          this.uploadedFiles = response;
          console.log(response);
        },
        (error: any) => { console.log(error); });
  }

  downloadFile(id: number, fileName: string): void {
    this.tasksService
      .downloadFile(id)
      .subscribe(
        response => {
          const fileNameFromUrl = "file";
          if (fileNameFromUrl) {
            const contentType = response.headers.get("Content-Type");
            const blob = new Blob([response.body], { type: contentType });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = fileName;

            link.click();

            window.URL.revokeObjectURL(link.href);
            link.remove();
          }
          else {
            console.log("Unable to extract file")
          }
        }
      )

  }

  uploadedFiles: Files[] = [];
  fileUploadUrl: string = "http://localhost:9083/poc/files//upload";
  onUpload(event: any) {
    event.files;
  }
  index: any;


  files: any = [];

  totalSize: number = 0;

  totalSizePercent: number = 0;

  choose(event: any, callback: any) {
    callback();
  }

  onRemoveTemplatingFile(event: any, file: any, removeFileCallback: any, index: any) {
    removeFileCallback(event, index);
    this.totalSize -= parseInt(this.formatSize(file.size));
    this.totalSizePercent = this.totalSize / 10;
  }

  onClearTemplatingUpload(clear: any) {
    clear();
    this.totalSize = 0;
    this.totalSizePercent = 0;
  }

  onTemplatedUpload() {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
  }

  onSelectedFiles(event: any) {
    this.files = event.currentFiles;
    this.files.forEach((file: any) => {
      this.totalSize += parseInt(this.formatSize(file.size));
    });
    this.totalSizePercent = this.totalSize / 10;
  }

  uploadEvent(callback: any) {
    callback();
  }

  formatSize(bytes: any) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.translation.fileSizeTypes;
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = parseFloat((bytes / Math.pow(k, i)).toFixed(dm));

    return `${formattedSize} ${sizes[i]}`;
  }

}
