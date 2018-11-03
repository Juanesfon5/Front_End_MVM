import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;
  username: string;
  reg: string;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService) { }

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  logClick(form){
    this.submitted = true;
    if (this.messageForm.invalid) {
      return;
    }
    const user = {};
    for (var key in this.messageForm.controls) {
      if (this.messageForm.controls.hasOwnProperty(key)) {
        user[key] = this.messageForm.controls[key].value;
      }
    }
    this.apiService.authenticate(user);
    this.success = true;
    /** 
    this.username = form.value.User;
    console.log(this.username);
    alert("The form was submitted");
    switch (this.username) {
      case "Agente":
        this.reg = "Agente";
        break;
      case "Admin":
        this.reg = "Admin";
        break;

      case "XM":
        this.reg = "XMUSER";
        break;
    }*/
  }
}