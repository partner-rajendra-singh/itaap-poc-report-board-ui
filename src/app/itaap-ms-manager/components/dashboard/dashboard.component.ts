import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Task } from '../../api/models';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  providers: [MessageService, ConfirmationService]
})
export class DashboardComponent implements OnInit {

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
    private messageService: MessageService) { }

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
  }

  populateTasks(){
    this.tasksService.getTasksByStatus('C').subscribe((response) => {this.allCompletedTasks = response;},(error: any) => {console.log(error);});
    this.tasksService.getTasksByStatus('O').subscribe((response) => {this.allOverDueTasks = response;},(error: any) => {console.log(error);});
    this.tasksService.getTasksByStatus('B').subscribe((response) => {this.allBlockedTasks = response;},(error: any) => {console.log(error);});
    this.tasksService.getTasksByStatus('P').subscribe((response) => {this.allInProgressTasks = response;},(error: any) => {console.log(error);});
  }
  populateMicroservices(){
    
  }

}
