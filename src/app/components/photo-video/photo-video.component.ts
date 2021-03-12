import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-video',
  templateUrl: './photo-video.component.html',
  styleUrls: ['./photo-video.component.css']
})
export class PhotoVideoComponent implements OnInit {

  constructor() { }
    
  ngOnInit(): void {
    this.topFunction();
    }
  
  
    topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}
