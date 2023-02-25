import { faker } from '@faker-js/faker';
import { User } from '../models/user';

export function getUser(): User {
  return {
    name: {
      first: faker.name.firstName(),
      last: faker.name.lastName(),
    },
    gender: faker.name.gender(),
    dob: {
      age: faker.datatype.number({
        min: 1,
        max: 99,
      }),
      date: '',
    },
    picture: {
      thumbnail: '',
      medium: '',
      large: '',
    },
    phone: faker.phone.number(),
    nat: faker.address.countryCode(),
    location: {
      city: faker.address.city(),
      country: faker.address.country(),
    },
  };
}

export function getUsers(amount: number): Promise<User[]> {
  const users = [];
  for (let i = 0; i < amount; i++) {
    users.push(getUser());
  }
  return Promise.resolve(users);
}
