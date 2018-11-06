import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-gen-declarations',
  templateUrl: './view-gen-declarations.component.html',
  styleUrls: ['./view-gen-declarations.component.scss']
})
export class ViewGenDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllGenDeclarations().subscribe(
      data => this.declarations = data
    );
  }

}