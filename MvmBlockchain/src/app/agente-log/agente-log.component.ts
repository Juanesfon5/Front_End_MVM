import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agente-log',
  templateUrl: './agente-log.component.html',
  styleUrls: ['./agente-log.component.scss']
})
export class AgenteLogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openNav(){
    document.getElementById("mySidenav").style.width = "250px";
    
  }

  closeNav(){
    document.getElementById("mySidenav").style.width = "0";
  }

}
