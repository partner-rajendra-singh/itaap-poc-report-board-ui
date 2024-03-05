import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { AppConfigModule } from './config/config.module';
import { MainAppLayoutComponent } from './main.app.layout.component';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { AppTopBarComponent } from './components/app.topbar.component';
import { AppFooterComponent } from './components/app.footer.component';
import { AppMenuComponent } from './components/app.menu.component';
import { AppSidebarComponent } from './components/app.sidebar.component';
import { ButtonModule } from 'primeng/button';
// import { OverlayModule } from 'primeng/overlay';
import { MsalModule } from '@azure/msal-angular';
import { InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { DropdownModule } from 'primeng/dropdown';

const isIE = window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

@NgModule({
  declarations: [
    AppMenuitemComponent,
    AppTopBarComponent,
    AppFooterComponent,
    AppMenuComponent,
    AppSidebarComponent,
    MainAppLayoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    RadioButtonModule,
    InputSwitchModule,
    RippleModule,
    RouterModule,
    AppConfigModule,
    ButtonModule,
    // OverlayModule,
    DropdownModule,

    MsalModule.forRoot(new PublicClientApplication({
      auth: {
        clientId: 'a08bafed-c04f-403e-bd0e-3029926ee183', // Application (client) ID from the app registration
        authority: 'https://login.microsoftonline.com/common/', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
        redirectUri: 'http://localhost:4200/'// This is your redirect URI
      },
      cache: {
        cacheLocation: 'localStorage',
        storeAuthStateInCookie: isIE // Set to true for Internet Explorer 11
      }
    }), {
      interactionType: InteractionType.Popup, // Msal Guard Configuration
      authRequest: {
        scopes: ["user.read"]
      }
    }, null)

  ],
  exports: [MainAppLayoutComponent]
})
export class MainAppLayoutModule { }
