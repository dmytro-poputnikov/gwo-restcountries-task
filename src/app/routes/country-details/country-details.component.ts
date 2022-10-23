import { RegionsService } from './../../_services/regions.service';
import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, of, take, tap } from 'rxjs';
import { Country, Currency } from 'src/app/_models/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  country$: Observable<Country | null> = of(null);
  loaded$: Observable<boolean> = of(false);
  region: string | undefined = '';

  constructor(
    private regionsService: RegionsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.region = this.route.snapshot.url.at(-2)?.path;
    let country = this.route.snapshot.url.at(-1)?.path;

    if (this.region !== undefined && country !== undefined)
      this.country$ = this.regionsService
        .getCountry(this.region, country)
        .pipe(take(1));
  }
}
