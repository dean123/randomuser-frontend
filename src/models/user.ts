import { Dob } from './dob';
import { Name } from './name';
import { Picture } from './picture';

export type User = {
  cell: string;
  name: Name;
  gender: string;
  dob: Dob;
  picture: Picture;
}
