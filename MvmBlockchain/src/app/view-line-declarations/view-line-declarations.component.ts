import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-view-line-declarations',
  templateUrl: './view-line-declarations.component.html',
  styleUrls: ['./view-line-declarations.component.scss']
})
export class ViewLineDeclarationsComponent implements OnInit {
  declarations: Object;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllLineDeclarations().subscribe(
      data => this.declarations = data
    );
  }

}
