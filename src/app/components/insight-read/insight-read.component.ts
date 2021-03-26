import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insight-read',
  templateUrl: './insight-read.component.html',
  styleUrls: ['./insight-read.component.css']
})
export class InsightReadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.topFunction();
    }
  
  
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

}
