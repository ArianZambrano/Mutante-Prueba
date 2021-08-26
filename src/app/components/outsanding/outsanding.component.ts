import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/propiedad.model';

@Component({
  selector: 'app-outsanding',
  templateUrl: './outsanding.component.html',
  styleUrls: ['./outsanding.component.scss']
})
export class OutsandingComponent implements OnInit {
  propiedades: Propiedad[] = [
    new Propiedad(" ", "Miraflores, Lima", 4140, 1500),
    new Propiedad(" ", "Miraflores, Lima", 4140, 1500),
    new Propiedad(" ", "Miraflores, Lima", 4140, 1500),
    new Propiedad(" ", "Miraflores, Lima", 4140, 1500),
    new Propiedad(" ", "Miraflores, Lima", 4140, 1500),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
