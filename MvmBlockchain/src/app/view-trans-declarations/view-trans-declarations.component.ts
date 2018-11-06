import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-view-trans-declarations',
  templateUrl: './view-trans-declarations.component.html',
  styleUrls: ['./view-trans-declarations.component.scss']
})
export class ViewTransDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllTransDeclarations().subscribe(
      data => this.declarations = data
    );
  }
}
