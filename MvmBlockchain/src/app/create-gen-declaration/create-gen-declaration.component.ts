import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-gen-declaration',
  templateUrl: './create-gen-declaration.component.html',
  styleUrls: ['./create-gen-declaration.component.scss']
})
export class CreateGenDeclarationComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      idDeclaracionGen: ['', Validators.required],
      nombre: ['', Validators.required],
      subestacion: ['', Validators.required],
      nivelTension: ['', Validators.required],
      nombrePuntoConexion: ['', Validators.required],
      tipoTurbina: ['', Validators.required],
      tipoCiclo: ['', Validators.required],
      capNominal: ['', Validators.required],
      capNominalM: ['', Validators.required],
      nombreUnd: ['', Validators.required],
      capEf: ['', Validators.required],
      minTec: ['', Validators.required],
      factPot: ['', Validators.required],
      capAbs: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      return;
    }

    const gen = {
      idDeclaracionGen: this.messageForm.controls['idDeclaracionGen'].value,
      declaracionCondensador: {
        condensador: {
          nombre: this.messageForm.controls['nombre'].value,
          barra: {
            subestacion: this.messageForm.controls['subestacion'].value,
            nivelTension: parseInt(this.messageForm.controls['nivelTension'].value),
            nombrePuntoConexion: this.messageForm.controls['nombrePuntoConexion'].value
          }
        },
        capacidadNominal: parseInt(this.messageForm.controls['capacidadNominal'].value),
        tensionNominal: parseInt(this.messageForm.controls['tensionNominal'].value),
        conexion: this.messageForm.controls['conexion'].value,
        modoConexion: this.messageForm.controls['modoConexion'].value,
        agente: `resource:co.edu.eafit.mvmblockchain.AgenteMEM#idAgenteMEM:${JSON.parse(localStorage.getItem('user'))['id']}`
      }
    };

    this.apiService.createNewCondenserDeclaration(gen);
    this.success = true;
  }

}
