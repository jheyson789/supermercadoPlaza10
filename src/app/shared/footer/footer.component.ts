import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var mapaLeaflet = L.map('ubicacion').setView([-17.3932357,-66.1588465], 18);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapaLeaflet);
    L.marker([-17.393174, -66.158819]).addTo(mapaLeaflet)
    .bindPopup('PLAZA 10 <br> SUPERMERCADO')
    .openPopup();

  }
}