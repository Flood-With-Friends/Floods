import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FindRoute } from "./FindRoute/FindRouteComponent";
import { CreateReport } from "./CreateReport/CreateReportComponent";
import { UserReportsComponent } from "./user-reports/user-reports.component";
import { ConnectToContactsComponent } from "./connect-to-contacts/connect-to-contacts.component";
import { SafeMovingComponent } from "./safe-moving/safe-moving.component";
import { StrandedOkayComponent } from "./stranded-okay/stranded-okay.component";
import { NeedHelpComponent } from "./need-help/need-help.component";
import { HomeComponent } from "./home/home.component";
import { AddContactsComponent } from "./add-contacts/add-contacts.component";

const routes: Routes = [
  { path: "route", component: FindRoute },
  { path: "create-report", component: CreateReport },
  { path: "connect-contacts", component: ConnectToContactsComponent },
  { path: "user-reports", component: UserReportsComponent },
  { path: "safe-moving", component: SafeMovingComponent },
  { path: "stranded-okay", component: StrandedOkayComponent },
  { path: "need-help", component: NeedHelpComponent },
  { path: "", component: HomeComponent },
  { path: "add-contacts", component: AddContactsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
