import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
  }


  ngOnInit(): void {
    this.topFunction();
    this.title.setTitle('  White Label Nearshore | Solutions ');
    this.meta.updateTag({ name: 'og:description', content: 'We offer multiple remotely White Label solution to scale your costs and revenue. Affordable and scalable services always.' });
    this.meta.updateTag({ name: 'og:url', content: 'https://whitelabelnearshore.com/solutions' });
    this.meta.updateTag({ name: 'og:image', content: 'og:image” content=”https://whitelabelnearshore.com/assets/imagenesWeb/About/a_header.png' });

  }


  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
