import { Dob } from './dob';
import { UserLocation } from './location';
import { Name } from './name';
import { Picture } from './picture';

export type User = {
  cell: string;
  name: Name;
  gender: string;
  dob: Dob;
  picture: Picture;
  phone: string;
  nat: string;
  location: UserLocation;
}
