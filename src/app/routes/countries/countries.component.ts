import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  region = '';
  ngOnInit(): void {
    this.region = this.route.snapshot.params['region'];
  }
}
