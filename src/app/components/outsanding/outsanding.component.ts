import { Component, OnInit } from '@angular/core';
import { Propiedad } from 'src/app/models/propiedad.model';

@Component({
  selector: 'app-outsanding',
  templateUrl: './outsanding.component.html',
  styleUrls: ['./outsanding.component.scss']
})
export class OutsandingComponent implements OnInit {
  imagesURL: string = "../../../assets/images";
  propiedades: Propiedad[] = [
    new Propiedad(`${this.imagesURL}/propiedad-1.png`, "Miraflores, Lima", 4140, 1500),
    new Propiedad(`${this.imagesURL}/propiedad-2.png`, "Miraflores, Lima", 4140, 1500),
    new Propiedad(`${this.imagesURL}/propiedad-3.png`, "Miraflores, Lima", 4140, 1500),
    new Propiedad(`${this.imagesURL}/propiedad-4.png`, "Miraflores, Lima", 4140, 1500),
    new Propiedad(`${this.imagesURL}/propiedad-5.png`, "Miraflores, Lima", 4140, 1500),
    new Propiedad(`${this.imagesURL}/propiedad-6.png`, "Miraflores, Lima", 4140, 1500),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
