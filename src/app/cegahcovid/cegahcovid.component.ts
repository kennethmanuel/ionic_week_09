import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cegahcovid',
  templateUrl: './cegahcovid.component.html',
  styleUrls: ['./cegahcovid.component.scss'],
})
export class CegahcovidComponent implements OnInit {
  cegahCovidImg = '';

  constructor() { }

  ngOnInit() {}

  button1() {
    this.cegahCovidImg = '../assets/cegahcovid/cucitangan.jpg';
    return this.cegahCovidImg;
  }

  button2() {
    this.cegahCovidImg = '../assets/cegahcovid/pakaimasker.jpg';
    return this.cegahCovidImg;
  }

  button3() {
    this.cegahCovidImg = '../assets/cegahcovid/stayhome.jpg';
    return this.cegahCovidImg;
  }

}
