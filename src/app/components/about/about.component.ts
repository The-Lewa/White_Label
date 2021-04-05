import { Component, OnInit } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit(): void {
  this.topFunction();
  this.title.setTitle(' White Label Nearshore | About Us ');
  this.meta.updateTag({ name: 'og:description', content: 'We are Nearshore White Label services company located in Guatemala, City Central America. We are constantly seeking US companies for a long-term partnership. Get to know us!' });
  this.meta.updateTag({ name: 'og:url', content: 'https://whitelabelnearshore.com/about-whitelabel-nearshore' });
  this.meta.updateTag({ name: 'og:image', content: 'https://whitelabelnearshore.com/assets/imagenesWeb/About/a_header.png' });
  this.meta.updateTag({ name: 'keywords', content: 'White label services Guatemala, nearshore white label company' });
  }


  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
