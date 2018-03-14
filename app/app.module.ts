import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateNewDocIdComponent } from './admin/create-new-doc-id/create-new-doc-id.component';
import { CheckItemComponent } from './admin/check-item/check-item.component';
import { CreateNewTransferRequestComponent } from './receiver/create-new-transfer-request/create-new-transfer-request.component';
import { ReceiverDashboardComponent } from './receiver/receiver-dashboard/receiver-dashboard.component';
import { ReceiverListComponent } from './receiver/receiver-list/receiver-list.component';
import { HandlerDashboardComponent } from './handler/handler-dashboard/handler-dashboard.component';
import { HandlerListComponent } from './handler/handler-list/handler-list.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';
import { PickerDashboardComponent } from './picker/picker-dashboard/picker-dashboard.component';
import { PickerListComponent } from './picker/picker-list/picker-list.component';
import { PpicDashboardComponent } from './ppic/ppic-dashboard/ppic-dashboard.component';
import { RequestPickingComponent } from './ppic/request-picking/request-picking.component';
import { StorerDashboardComponent } from './storer/storer-dashboard/storer-dashboard.component';
import { StorerListComponent } from './storer/storer-list/storer-list.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { HandlerComponent } from './handler/handler.component';
import { StorerComponent } from './storer/storer.component';
import { PpicComponent } from './ppic/ppic.component';
import { PickerComponent } from './picker/picker.component';



@NgModule({
  declarations: [
    routingComponents,
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminDashboardComponent,
    CreateNewDocIdComponent,
    CheckItemComponent,
    CreateNewTransferRequestComponent,
    ReceiverDashboardComponent,
    ReceiverListComponent,
    HandlerDashboardComponent,
    HandlerListComponent,
    ManagerDashboardComponent,
    PickerDashboardComponent,
    PickerListComponent,
    PpicDashboardComponent,
    RequestPickingComponent,
    StorerDashboardComponent,
    StorerListComponent,
    ReceiverComponent,
    HandlerComponent,
    StorerComponent,
    PpicComponent,
    PickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
