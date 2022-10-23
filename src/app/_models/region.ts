import { Country } from './country';

export interface Region {
  name: string;
  imageUrl: string;
  countries?: Country[];
}
