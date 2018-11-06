import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { XMLogedComponent } from './xmloged/xmloged.component';
import { AgenteLogComponent } from './agente-log/agente-log.component';
import { AdminLogComponent } from './admin-log/admin-log.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';
import { CreateAgentComponent } from './create-agent/create-agent.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { ViewRegulatorsComponent } from './view-regulators/view-regulators.component';
import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations/view-condenser-declarations.component';
import { ViewLineDeclarationsComponent } from './view-line-declarations/view-line-declarations.component';
import { ViewReactorDeclarationsComponent } from './view-reactor-declarations/view-reactor-declarations.component';
import { ViewSvcDeclarationsComponent } from './view-svc-declarations/view-svc-declarations.component';
import { ViewTransDeclarationsComponent } from './view-trans-declarations/view-trans-declarations.component';
import { ViewGenDeclarationsComponent } from './view-gen-declarations/view-gen-declarations.component';
import { CreateCondenserDeclarationComponent } from './create-condenser-declaration/create-condenser-declaration.component';
import { CreateLineDeclarationComponent } from './create-line-declaration/create-line-declaration.component';
import { CreateReactorDeclarationComponent } from './create-reactor-declaration/create-reactor-declaration.component';
import { CreateSvcDeclarationComponent } from './create-svc-declaration/create-svc-declaration.component';
import { CreateTransDeclarationComponent } from './create-trans-declaration/create-trans-declaration.component';
import { CreateGenDeclarationComponent } from './create-gen-declaration/create-gen-declaration.component';
import { SidenavXMComponent } from './sidenav-xm/sidenav-xm.component';
import { SidenavAgenteComponent } from './sidenav-agente/sidenav-agente.component';
import { LogoutComponent } from './logout/logout.component';

/**import { CreateRegulatorComponent } from './create-regulator/create-regulator.component';
import { ViewRegulatorsComponent } from './view-regulators/view-regulators.component';
import { CreateCondenserDeclarationComponent } from './create-condenser-declaration/create-condenser-declaration.component';
import { ViewCondenserDeclarationsComponent } from './view-condenser-declarations/view-condenser-declarations.component';
import { ViewAgentsComponent } from './view-agents/view-agents.component';
import { CreateAgentComponent } from './create-agent/create-agent.component';*/

@NgModule({
  exports: [
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    XMLogedComponent,
    AgenteLogComponent,
    AdminLogComponent,
    CreateAgentComponent,
    ViewAgentsComponent,
    CreateRegulatorComponent,
    ViewRegulatorsComponent,
    ViewCondenserDeclarationsComponent,
    ViewLineDeclarationsComponent,
    ViewReactorDeclarationsComponent,
    ViewSvcDeclarationsComponent,
    ViewTransDeclarationsComponent,
    ViewGenDeclarationsComponent,
    CreateCondenserDeclarationComponent,
    CreateLineDeclarationComponent,
    CreateReactorDeclarationComponent,
    CreateSvcDeclarationComponent,
    CreateTransDeclarationComponent,
    CreateGenDeclarationComponent,
    SidenavXMComponent,
    SidenavAgenteComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatToolbarModule, 
    MatNativeDateModule, 
    MatIconModule, 
    MatSidenavModule, 
    MatListModule,
    MatSidenavModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
