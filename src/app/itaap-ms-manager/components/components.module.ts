import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataComponent } from './add-data/add-data.component';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { SplitterModule } from 'primeng/splitter';
import { DividerModule } from 'primeng/divider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { AutoFocusModule } from 'primeng/autofocus';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { BlockUIModule } from 'primeng/blockui';
import { OverlayModule } from 'primeng/overlay';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FileUploadModule } from 'primeng/fileupload';
import { TimelineModule } from 'primeng/timeline';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { TreeModule } from 'primeng/tree';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AccordionModule } from 'primeng/accordion';
import { EditorModule } from 'primeng/editor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InplaceModule } from 'primeng/inplace';
import { ChartModule } from 'primeng/chart';
import { FullCalendarModule } from '@fullcalendar/angular';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ChipModule } from 'primeng/chip';
import { TabMenuModule } from 'primeng/tabmenu';

import { AzureVariableComponent } from './azurelib/azure-variable/azure-variable.component';
import { AzureAdminComponent } from './azurelib/azure-admin/azure-admin.component';
import { MsTrackerComponent } from './dashboard/ms-tracker/ms-tracker.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestConnectivityComponent } from './kubernetes/test-connectivity/test-connectivity.component';
import { ConnectivityHistoryComponent } from './kubernetes/connectivity-history/connectivity-history.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { TodoComponent } from './tasks/todo/todo.component';
import { AccessComponent } from './auth/access/access.component';
import { LoginComponent } from './auth/login/login.component';
import { ErrorComponent } from './auth/error/error.component';
import { SignOutComponent } from './auth/signout/signout.component';
import { DropdownModule } from 'primeng/dropdown';
import { BuildsComponent } from './deployment/builds/builds.component';
import { SidebarModule } from 'primeng/sidebar';
import { CompareComponent } from './azurelib/compare/compare.component';
import { MicroservicesComponent } from './microservices/microservices.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';



@NgModule({
  declarations: [
    AddDataComponent,
    AzureVariableComponent,
    AzureAdminComponent,
    MsTrackerComponent,
    DashboardComponent,
    TestConnectivityComponent,
    ConnectivityHistoryComponent,
    MyRequestsComponent,
    TodoComponent,
    AccessComponent,
    LoginComponent,
    ErrorComponent,
    SignOutComponent,
    BuildsComponent,
    CompareComponent,
    MicroservicesComponent
  ],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,

    HttpClientModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    ListboxModule,
    RippleModule,
    MenubarModule,
    InputTextModule,
    TabViewModule,
    SplitterModule,
    DividerModule,
    SplitButtonModule,
    CheckboxModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextareaModule,
    AutoFocusModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    RadioButtonModule,
    BadgeModule,
    AvatarModule,
    BlockUIModule,
    OverlayModule,
    ConfirmDialogModule,
    OverlayPanelModule,
    FileUploadModule,
    ConfirmPopupModule,
    TagModule,
    DropdownModule,
    TimelineModule,
    TreeModule,
    BreadcrumbModule,
    AccordionModule,
    SidebarModule,
    EditorModule,
    AutoCompleteModule,
    InplaceModule,
    ChartModule,
    FullCalendarModule,
    ScrollPanelModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TabMenuModule,
    
    InputNumberModule,
    AvatarGroupModule,
    SelectButtonModule,
    ChipModule
  ]
})
export class ComponentsModule { }
