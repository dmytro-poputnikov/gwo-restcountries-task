import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../_models/region';
import { count, map, of, take, filter, Observable, switchMap } from 'rxjs';
import { Country } from '../_models/country';

export const regionsList: Region[] = [
  {
    name: 'africa',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/35/Africa_map.jpg',
  },
  {
    name: 'americas',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/3/39/America_map.jpg',
  },
  {
    name: 'asia',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHrepjEyPjyzMrnO043T_od9Oz4ad1KTgVK5tBV8NN0FRnhkLGKMkcTAkZGVUsFEi0Z0&usqp=CAU',
  },
  {
    name: 'europe',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Blank_map_of_Europe_cropped_%28blue%29.svg/1200px-Blank_map_of_Europe_cropped_%28blue%29.svg.png',
  },
  {
    name: 'oceania',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Oceania_full_blank_map.svg/1200px-Oceania_full_blank_map.svg.png',
  },
];

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  getCountries(region: string) {
    let regionIndex = regionsList.findIndex((reg) => reg.name === region);
    if (regionIndex === -1) this.router.navigateByUrl('/');

    if (regionsList[regionIndex].countries !== undefined)
      return of(regionsList[regionIndex].countries!);

    return this.http
      .get<Country[]>(
        `${this.baseUrl}/region/${region}?fields=name,flags,translations,cca3,maps,currencies,population,capital`
      )
      .pipe(
        map((countries) => {
          regionsList[regionIndex].countries = countries;
          return countries;
        })
      );
  }

  getCountry(
    regionName: string,
    countryName: string
  ): Observable<Country | null> {
    let regionIndex = regionsList.findIndex((reg) => reg.name === regionName);
    if (regionIndex === -1) this.router.navigateByUrl('/');

    return this.getCountries(regionsList[regionIndex].name).pipe(
      take(1),
      switchMap((countries) => {
        let country = countries.find(
          (country) =>
            country.translations.pol.common
              .replace(/, /g, '_')
              .replace(/\s/g, '-')
              .toLowerCase() === countryName.toLowerCase()
        );
        if (country === undefined) return of(null);
        return of(country);
      })
    );
  }
}
