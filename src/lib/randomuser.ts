import { User } from '../models/user';

export default async function getRandomUsers(amount: number): Promise<User[]> {
  const response = await fetch(`https://randomuser.me/api?results=${amount}`);
  if (response.ok) {
    const data = await response.json();
    return data.results;
  }
  return [];
}
