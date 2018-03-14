import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CreateNewDocIdComponent } from './admin/create-new-doc-id/create-new-doc-id.component';
import { CheckItemComponent } from './admin/check-item/check-item.component';
import { CreateNewTransferRequestComponent } from './receiver/create-new-transfer-request/create-new-transfer-request.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { ReceiverDashboardComponent } from './receiver/receiver-dashboard/receiver-dashboard.component';
import { ReceiverListComponent } from './receiver/receiver-list/receiver-list.component';
import { HandlerComponent } from './handler/handler.component';
import { HandlerDashboardComponent } from './handler/handler-dashboard/handler-dashboard.component';
import { HandlerListComponent } from './handler/handler-list/handler-list.component';
import { ManagerDashboardComponent } from './manager/manager-dashboard/manager-dashboard.component';
import { PickerComponent } from './picker/picker.component';
import { PickerDashboardComponent } from './picker/picker-dashboard/picker-dashboard.component';
import { PickerListComponent } from './picker/picker-list/picker-list.component';
import { PpicComponent } from './ppic/ppic.component';
import { PpicDashboardComponent } from './ppic/ppic-dashboard/ppic-dashboard.component';
import { RequestPickingComponent } from './ppic/request-picking/request-picking.component';
import { StorerComponent } from './storer/storer.component';
import { StorerDashboardComponent } from './storer/storer-dashboard/storer-dashboard.component';
import { StorerListComponent } from './storer/storer-list/storer-list.component';

const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'manager/dashboard', component: ManagerDashboardComponent},
    { path: 'admin', component:
      AdminComponent,
        children: [
            { path: 'dashboard', component: AdminDashboardComponent},
            { path: 'create new doc id', component: CreateNewDocIdComponent},
            { path: 'create new transfer request', component: CreateNewTransferRequestComponent},
            { path: 'check item', component: CheckItemComponent},
            { path: 'request for picking', component: RequestPickingComponent}
      ]
    },
    { path: 'receiver', component: ReceiverComponent,
        children: [
            { path: 'dashboard', component: HandlerDashboardComponent},
            { path: 'item-list', component: HandlerListComponent},
            { path: 'create new transfer request', component: CreateNewTransferRequestComponent},
            { path: 'request for picking', component: RequestPickingComponent}
      ]
    },
    { path: 'handler', component: HandlerComponent,
    children: [
            { path: 'dashboard', component: HandlerDashboardComponent},
            { path: 'item-list', component: HandlerListComponent},
]
  },
    { path: 'storer', component: StorerComponent,
    children: [
            { path: 'dashboard', component: StorerDashboardComponent},
            { path: 'item-list', component: StorerListComponent},
          ]
        },
    { path: 'ppic', component: PpicComponent,
    children: [
      { path: 'dashboard', component: PpicDashboardComponent},
      { path: 'request for picking', component: RequestPickingComponent},
    ]
  },
    { path: 'picker', component: PickerComponent,
    children: [
      { path: 'dashboard', component: PickerDashboardComponent},
      { path: 'item-list', component: PickerListComponent},
      { path: 'create new transfer request', component: CreateNewTransferRequestComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
                                    AdminComponent,
                                    AdminDashboardComponent,
                                    CreateNewDocIdComponent,
                                    CheckItemComponent,
                                    CreateNewTransferRequestComponent,
                                    ReceiverComponent,
                                    ReceiverDashboardComponent,
                                    ReceiverListComponent,
                                    HandlerComponent,
                                    HandlerDashboardComponent,
                                    HandlerListComponent,
                                    ManagerDashboardComponent,
                                    PickerComponent,
                                    PickerDashboardComponent,
                                    PickerListComponent,
                                    PpicComponent,
                                    PpicDashboardComponent,
                                    RequestPickingComponent,
                                    StorerComponent,
                                    StorerDashboardComponent,
                                    StorerListComponent
                                                         ];
