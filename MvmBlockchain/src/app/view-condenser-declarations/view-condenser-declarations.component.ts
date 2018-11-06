import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-condenser-declarations',
  templateUrl: './view-condenser-declarations.component.html',
  styleUrls: ['./view-condenser-declarations.component.scss']
})
export class ViewCondenserDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    let ss = JSON.parse(localStorage.getItem('user'));
    if (ss.type == "regulator"){
      this.apiService.getAllCondenserDeclarations().subscribe(
        data => this.declarations = data
      );
    } else if (ss.type == "agent"){
      this.apiService.getIDCondenser().subscribe(
        data => this.declarations = data
      );
    }
  }
}
