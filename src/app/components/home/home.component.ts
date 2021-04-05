import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
    this.topFunction();
    this.title.setTitle(' White Label Nearshore | Home ');
    this.meta.updateTag({ name: 'og:description', content: 'Nearshore White Label services company. Affordable and scalable solutions. We help you building a nearshore team according to your needs.' });
    this.meta.updateTag({ name: 'og:url', content: 'https://whitelabelnearshore.com' });
    this.meta.updateTag({ name: 'og:image', content: 'https://whitelabelnearshore.com/assets/imagenesWeb/Home/h_know.png' });
  }


  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
