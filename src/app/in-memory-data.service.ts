import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
          {id: 11, name: 'Mr. Nice'},
          {id: 12, name: 'Narco'},
          {id: 13, name: 'Superman'},
          {id: 14, name: 'Batman'},
          {id: 15, name: 'Magneta'},
          {id: 16, name: 'Hulk'},
          {id: 17, name: 'Cyclops'},
          {id: 18, name: 'Wonder Woman'},
          {id: 19, name: 'Wolverine'},
          {id: 20, name: 'Tornado'}
        ];
        return {heroes};
    }
}