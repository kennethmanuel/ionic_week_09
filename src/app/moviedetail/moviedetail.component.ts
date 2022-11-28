import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductModel } from '../product.model';
import { MovieModel } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss'],
})
export class MoviedetailComponent implements OnInit {
  title: string = "";
  sinopsis: string = "";
  url: string = "";

  constructor(public ps: MovieService, public Route: ActivatedRoute) { }

  ngOnInit() {
    let id: number = this.Route.snapshot.params['id'];
    let pm: MovieModel = this.ps.movieList[id];
    this.title = pm.title;
    this.sinopsis = pm.sinopsis;
    this.url = pm.url;
  }
}
