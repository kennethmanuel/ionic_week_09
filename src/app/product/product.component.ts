import { Component, OnInit, Input } from '@angular/core';
import { ProductModel } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  json: string = '...Menuggu dari Observable';

  products: any = [];

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

  constructor(public ps: ProductService) { }

  listProduct() {
    this.ps.productList().subscribe(
      (data) => {
        // this.json = data[0]['name'];
        this.products = data;
      });
  }

  ngOnInit(): void {
    // this.products = this.ps.productsPhone;
    this.listProduct();
  }

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

  showMoreClick(i: number) {
    this.idx = i;
  }

}
