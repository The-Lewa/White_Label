import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { link } from 'node:fs';
import { fromEvent } from 'rxjs';
import { CargarScriptsService } from "./../../cargar-scripts.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  @ViewChild('linkHome', { read: ElementRef }) linkHome: ElementRef;
  @ViewChild('menu-bars', { read: ElementRef }) menuBars: ElementRef;
  constructor(private _CargaScripts: CargarScriptsService) {
    // _CargaScripts.Carga(["modal"]);
    this.linkHome = new ElementRef(document.getElementById('link-home'));
    this.menuBars = new ElementRef(document.getElementById('menu-bars'));
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent<any>(this.linkHome.nativeElement, 'click').subscribe(() => {
      //this.myFunction();
    });
  }

  myFunction() {
    if (window.innerWidth <= 991) {
      let shand = document.getElementsByClassName('rojos') as HTMLCollectionOf<HTMLElement>;

  if (shand.length != 0) {
    if (shand[0].style.left = "10px"){
      shand[0].style.left = "-100%";
    }   
  }

    }
  }

  secondFunction() {
    if (window.innerWidth <= 991) {
      let shand = document.getElementsByClassName('rojos') as HTMLCollectionOf<HTMLElement>;

  if (shand.length != 0) {
    if (shand[0].style.left = '-100%'){
      shand[0].style.left = "0";
    }   
  }

    }
  }

}
