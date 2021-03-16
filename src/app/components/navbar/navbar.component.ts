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

  isCollapse = false;   // guardamos el valor
    toggleState() { // manejador del evento
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }

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
  }

  

}
