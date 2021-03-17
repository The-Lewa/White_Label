import { Component, OnInit } from '@angular/core';
import { ReCaptchaV3Service } from 'ngx-captcha';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  siteKey: string;

  constructor(
    private reCaptchaV3Service: ReCaptchaV3Service
  ) {
    this.siteKey = "6Lea24EaAAAAADe2_NubINn8FdZsRGXFTkr7NhIL";
  }



  ngOnInit(): void {
    this.topFunction();
    this.reCaptchaV3Service.execute(this.siteKey, 'homepage', (token) => {
      console.log('This is your token: ', token);
    }, {
      useGlobalDomain: false
    });
  }

  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

}
