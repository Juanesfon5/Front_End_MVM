import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xmloged',
  templateUrl: './xmloged.component.html',
  styleUrls: ['./xmloged.component.scss']
})
export class XMLogedComponent implements OnInit {

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
