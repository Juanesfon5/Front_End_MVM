import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { XMLogedComponent} from './xmloged/xmloged.component';
import { AgenteLogComponent } from './agente-log/agente-log.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { ViewRegulatorComponent } from './view-regulator/view-regulator.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'XMUSER',
    component: XMLogedComponent
  },
  {
    path:'Agente',
    component: AgenteLogComponent
  },
  {
    path:'Admin',
    component: AdminLogComponent
  },
  {
    path:'Create',
    component: CreateAgentComponent
  },
  {
    path:'ViewAg',
    component: ViewAgentsComponent
  },
  {
    path:'CreateXM',
    component: CreateRegulatorComponent
  },
  {
    path:'ViewXM',
    component: ViewRegulatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
