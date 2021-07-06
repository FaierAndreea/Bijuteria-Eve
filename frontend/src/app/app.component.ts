import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IGemModel } from './Models/GemModel';
import { IPaginationModel } from './Models/PaginationModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'Eve';
  
constructor() {}

  ngOnInit(): void {
  }
}
