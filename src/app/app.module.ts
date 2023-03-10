import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './exercises/Task_1_Practicing_Components/success-alert/success-alert.component';
import { WarningAlertComponent } from './exercises/Task_1_Practicing_Components/warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './exercises/Task_2_Practicing_Databinding/user/user.component';
import { PracticingDirectivesComponent } from './exercises/Task_3_Practicing_Directives/practicing-directives/practicing-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UserComponent,
    PracticingDirectivesComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
