import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss'],
})
export class ProductdetailComponent implements OnInit {
  name: string = "";
  price: number = 0;
  url: string = "";
  desc: string = "";

  constructor(public ps: ProductService, public Route: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.Route.snapshot.params['id'];
    // let pm: ProductModel = this.ps.productsPhone[id];
    this.productDetail(id);
    console.log(this.name);

    // this.name = pm.name;
    // this.price = pm.price;
    // this.url = pm.url;
    // this.desc = pm.desc;
  }

  productDetail(id: number) {
    this.ps.productDetail(id).subscribe(
      (data) => {
        this.name = data['name'];
        this.price = data['price'];
        this.url = data['url'];
        this.desc = data['desc'];
      }
    )
  }


}
