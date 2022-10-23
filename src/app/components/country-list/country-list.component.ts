import { RegionsService } from './../../_services/regions.service';
import { Country } from './../../_models/country';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  constructor(private regionsService: RegionsService) {}

  loaded$: Observable<boolean> = of(false);

  countries: Country[] = [];

  @Input() region = '';

  ngOnInit(): void {
    this.regionsService.getCountries(this.region).subscribe((countries) => {
      this.countries = countries;
      this.loaded$ = of(true);
    });
  }

  filterTerm!: string;
}
