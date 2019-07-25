import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Position } from './interfaces/position';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  positions: Array <Position>;

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getPositions().subscribe((response: any) => {
      this.positions = response;
    });
  }
}
