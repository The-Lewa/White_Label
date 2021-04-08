import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

import { Meta, Title } from '@angular/platform-browser';


declare var $: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent implements OnInit {
  contact: Contact;
  status: string;
  isSending = false;
  recaptcha: string;
  validated = false;
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private title: Title,
    private meta: Meta,
    private contactService: ContactService

  ) {
    this.buildForm();
    this.contact = new Contact('', '', '', '', '', '', '', '', '', '', '', false);
    this.status = '';
    this.recaptcha =  '';
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
      name: ['', [Validators.required]],

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


  sendContact(): void {
    console.log(this.contact);
    if (this.validated) {
      this.isSending = true;
      this.contactService.sendEmail(this.contact).subscribe(
        res => {
          this.isSending = false;
          alert('Mensaje de contacto enviado correctamente');
          this.cleanContac();
        },
        err => {
          this.isSending = false;
          this.onError(err);
        },
      );
    }
  }

  onError(error: any): void {
    var errorMessage = error;
    if (errorMessage != null) {
      this.status = 'error';
      console.error(errorMessage);
    }
  }

  resolved(captchaResponse: string) {
    this.recaptcha = captchaResponse;
    if (this.recaptcha) {
      this.validated = true;
    }
    console.log('Resolved captcha with response: ', this.recaptcha);
  }
  cleanContac() {
    this.contact = new Contact('', '', '', '', '', '', '', '', '', '', '', false);
    this.validated = false;
  }

  resolvedd(captchaResponse: string) {

  }

}
