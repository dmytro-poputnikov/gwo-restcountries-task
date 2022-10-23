import { Currency } from './../../_models/country';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
  @Input() currency: Currency | undefined;

  constructor() {}

  ngOnInit() {}
}
