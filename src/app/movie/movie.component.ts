import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {

  movies: any = [];

  constructor(public ps: MovieService) { }

  ngOnInit(): void {
    this.movies = this.ps.movieList;
  }

}
