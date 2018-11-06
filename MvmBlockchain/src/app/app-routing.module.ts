import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { XMLogedComponent} from './xmloged/xmloged.component';
import { AgenteLogComponent } from './agente-log/agente-log.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { ViewRegulatorsComponent } from './view-regulators/view-regulators.component';
import { CreateCondenserDeclarationComponent } from './create-condenser-declaration/create-condenser-declaration.component';
import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations/view-condenser-declarations.component';
import { ViewGenDeclarationsComponent } from './view-gen-declarations/view-gen-declarations.component';
import { ViewLineDeclarationsComponent } from './view-line-declarations/view-line-declarations.component';
import { ViewReactorDeclarationsComponent } from './view-reactor-declarations/view-reactor-declarations.component';
import { ViewSvcDeclarationsComponent } from './view-svc-declarations/view-svc-declarations.component';
import { ViewTransDeclarationsComponent } from './view-trans-declarations/view-trans-declarations.component';
import { CreateGenDeclarationComponent } from './create-gen-declaration/create-gen-declaration.component';
import { CreateLineDeclarationComponent } from './create-line-declaration/create-line-declaration.component';
import { CreateReactorDeclarationComponent } from './create-reactor-declaration/create-reactor-declaration.component';
import { CreateSvcDeclarationComponent } from './create-svc-declaration/create-svc-declaration.component';
import { CreateTransDeclarationComponent } from './create-trans-declaration/create-trans-declaration.component';

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
    component: ViewRegulatorsComponent
  },
  {
    path: 'create-condenser-declaration',
    component: CreateCondenserDeclarationComponent
  },
  {
    path: 'CreateGen',
    component: CreateGenDeclarationComponent
  },
  {
    path: 'CreateLine',
    component: CreateLineDeclarationComponent
  },
  {
    path: 'CreateReactor',
    component: CreateReactorDeclarationComponent
  },
  {
    path: 'CreateSvc',
    component: CreateSvcDeclarationComponent
  },
  {
    path: 'CreateTrans',
    component: CreateTransDeclarationComponent
  },
  {
    path: 'view-condenser-declarations',
    component: ViewCondenserDeclarationsComponent
  },
  {
    path: 'ViewGen',
    component: ViewGenDeclarationsComponent
  },
  {
    path: 'ViewLine',
    component: ViewLineDeclarationsComponent
  },
  {
    path: 'ViewReactor',
    component: ViewReactorDeclarationsComponent
  },
  {
    path: 'ViewSvc',
    component: ViewSvcDeclarationsComponent
  },
  {
    path: 'ViewTrans',
    component: ViewTransDeclarationsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
