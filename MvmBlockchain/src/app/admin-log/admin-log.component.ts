import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-log',
  templateUrl: './admin-log.component.html',
  styleUrls: ['./admin-log.component.scss']
})
export class AdminLogComponent implements OnInit {

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
