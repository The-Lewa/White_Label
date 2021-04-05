import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms'

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  resolved(captchaResponse: string) {

  }

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    private meta: Meta
    
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.topFunction();
    this.title.setTitle(' White Label Nearshore | Contact ');
    this.meta.updateTag({ name: 'og:description', content: ' content=”Contact information of White Label Nearshore services company located in Guatemala, City Central America. Telephone +502 4249.5407. Email sales@whitelabelnearshore.com' });
    this.meta.updateTag({ name: 'og:url', content: 'https://whitelabelnearshore.com/contact' });
    this.meta.updateTag({ name: 'og:image', content: 'https://whitelabelnearshore.com/assets/imagenesWeb/Home/h_know.png' });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['',  [Validators.required]],
     
    });

   /* this.form.valueChanges
      .subscribe(value => {
        console.log(value);
      });*/
  }
  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
    }
  }


  
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
