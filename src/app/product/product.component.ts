import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  productName = 'Nintendo Switch';
  productPrice = 8000000;
  productImg = '../assets/product/switch.jpg';
  btnDisable = true;
  btnColor = 'danger';
  netPrice = this.productPrice;
  kodeVoucher = '';
  fontSize = 10;
  showMore = false;
  idx = -1;

  products = [
    { name: 'Realme 5', price: 1800000, disc: 0.1, url: 'realme_5.jpg', spec: ['1gb', 'a', '128gb'] },
    { name: 'OPPO A1', price: 1400000, disc: 0.15, url: 'oppo_a1.jpg', spec: ['2gb', 'b', '120gb'] },
    { name: 'Samsung Galaxy S10', price: 1200000, disc: 0, url: 'samsung10.jpg', spec: ['3gb', 'c', '122gb'] },
    { name: 'Redmi Note 8', price: 1900000, disc: 0.2, url: 'redmi_note_8.jpg', spec: ['4gb', 'd', '125gb'] },
    { name: 'Iphone X', price: 6300000, disc: 0.25, url: 'iphone_x.jpg', spec: ['5gb', 'e', '188gb'] }
  ];

  constructor() { }

  ngOnInit() { }

  discountPrice(): number {
    return this.productPrice - (this.productPrice * 0.2);
  }

  applyDiscount() {
    this.netPrice = this.discountPrice();
    this.btnDisable = true;
  }

  checkVoucher(event: Event) {
    const element = event.target as HTMLInputElement;
    this.btnDisable = element.value === '007' ? false : true;
  }

  showMoreClick(i:number) {
    this.idx = i;
  }
  
}
