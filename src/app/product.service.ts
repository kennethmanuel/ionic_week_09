import { Injectable } from '@angular/core';
import { ProductModel } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsPhone: ProductModel[] = [
    new ProductModel('Realme 5', 1800000, 0.1, 'realme_5.jpg'),
    new ProductModel('OPPO A1', 1400000, 0.15, 'oppo_a1.jpg'),
    new ProductModel('Samsung Galaxy A10', 1200000, 0, 'samsung10.jpg'),
    new ProductModel('Redmi Note 8', 1900000, 0.2, 'redmi_note_8.jpg'),
    new ProductModel('Iphone X', 6300000, 0.25, 'iphone_x.jpg')
  ];

  constructor() { }
}
