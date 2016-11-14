import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let movies = [
      {id: 11, title: 'Mr. Nice', rating: 5, synopsis: 'Filme muito bom'},
      {id: 12, title: 'Narco', rating: 5, synopsis: 'Filme muito bom'},
      {id: 13, title: 'Bombasto', rating: 5, synopsis: 'Filme muito bom'},
      {id: 14, title: 'Celeritas', rating: 5, synopsis: 'Filme muito bom'},
      {id: 15, title: 'Magneta', rating: 5, synopsis: 'Filme muito bom'},
      {id: 16, title: 'RubberMan', rating: 5, synopsis: 'Filme muito bom'},
      {id: 17, title: 'Dynama', rating: 5, synopsis: 'Filme muito bom'},
      {id: 18, title: 'Dr IQ', rating: 5, synopsis: 'Filme muito bom'},
      {id: 19, title: 'Magma', rating: 5, synopsis: 'Filme muito bom'},
      {id: 20, title: 'Tornado', rating: 5, synopsis: 'Filme muito bom'}
    ];
    return {movies};
  }
}