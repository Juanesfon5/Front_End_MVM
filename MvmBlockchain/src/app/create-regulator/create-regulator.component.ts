import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-regulator',
  templateUrl: './create-regulator.component.html',
  styleUrls: ['./create-regulator.component.scss']
})
export class CreateRegulatorComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      nombre: ['', Validators.required]
    });
  }

  thisSubmit() {
    this.submitted = true;

    if (this.messageForm.invalid) {
      console.log("Invalido");
      return;
    }

    const regulator = {};
    for (var key in this.messageForm.controls) {
      if (this.messageForm.controls.hasOwnProperty(key)) {
        regulator[key] = this.messageForm.controls[key].value;
      }
    }

    this.apiService.createNewRegulator(regulator);
    this.success = true;
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
