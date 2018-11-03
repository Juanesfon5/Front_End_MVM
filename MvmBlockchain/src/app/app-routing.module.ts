import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { XMLogedComponent} from './xmloged/xmloged.component';
import { AgenteLogComponent } from './agente-log/agente-log.component';
import { AdminLogComponent } from './admin-log/admin-log.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
