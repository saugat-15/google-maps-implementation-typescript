import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
  }

  markerContent() {
    return `
    <h1>Company name: ${this.name}</h1>
    <h3>CatchPhrase: ${this.catchPhrase}</h3>
    `;
  }
}
