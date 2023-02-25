import { User } from '../models/user';

export default async function getRandomUsers(): Promise<User[]> {
  const response = await fetch('https://randomuser.me/api?results=20');

  if (response.ok) {
    const data = await response.json();
    return data.results;
  }

  return [];
}
