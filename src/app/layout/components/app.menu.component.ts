import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                  { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/home/dashboard'] },
                  { label: 'My Requests', icon: 'pi pi-fw pi-file-edit', routerLink: ['/home/my-requests'] },
                  { label: 'Insert', icon: 'pi pi-fw pi-plus', routerLink: ['/add/properties'] }
                ]
          },
          {
            label: 'Management',
            items: [
              { label: 'Microservices', icon: 'pi pi-fw pi-server', routerLink: ['/microservices/lists'] },
              { label: 'Tasks', icon: 'pi pi-fw pi-list', routerLink: ['/tasks/lists'] },
              {
                label: 'Azure Library',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                  {
                    label: 'Library',
                    icon: 'pi pi-fw pi-check',
                    routerLink: ['/library/variable']
                  },
                  {
                    label: 'Admin',
                    icon: 'pi pi-fw pi-clock',
                    routerLink: ['/library/admin']
                  },
                  {
                    label: 'Comparison',
                    icon: 'pi pi-fw pi-book',
                    routerLink: ['/library/compare']
                  }
                ]
              },
              { label: 'Pipelines', icon: 'pi pi-fw pi-id-card', routerLink: ['/deployment/builds'] },
              {
                label: 'Connectivity',
                icon: 'pi pi-fw pi-link',
                items: [
                  {
                    label: 'Test',
                    icon: 'pi pi-fw pi-check',
                    routerLink: ['/connectivity/test']
                  }
                  // {
                  //   label: 'History',
                  //   icon: 'pi pi-fw pi-clock',
                  //   routerLink: ['/connectivity/history']
                  // }
                ]
              }
            ]
          }
          /*,
            {
                label: 'UI Components',
                items: [
                    { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
                    { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
                    { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
                    { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
                    { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
                    { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
                    { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
                    { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
                    { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
                    { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
                    { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
                    { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                    { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
                    { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
                    { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
                ]
            }*/
        ];
    }
}
