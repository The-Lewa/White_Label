import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from "./../../cargar-scripts.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _CargaScripts:CargarScriptsService )
   { 
     _CargaScripts.Carga(["modal"]);
  }

  ngOnInit(): void {
  }

}
