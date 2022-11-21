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
}
