import { Injectable } from '@angular/core';
import { MovieModel } from 'src/app/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieList: MovieModel[] = [
    new MovieModel(
      'Avenger Infinity War',
      'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality.',
      'https://ubaya.fun/images/1.jpg'),
    new MovieModel(
      'Joker',
      'Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks --       the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he is part of the world around him. ',
      'https://ubaya.fun/images/2.jpg'),
    new MovieModel(
      'OnWard',
      'Teenage elf brothers Ian and Barley embark on a magical quest to spend one more day with their late father.        Like any good adventure, their journey is filled with cryptic maps, impossible obstacles and unimaginable discoveries.',
      'https://ubaya.fun/images/3.jpg'),
  ]

  constructor() { }
}
