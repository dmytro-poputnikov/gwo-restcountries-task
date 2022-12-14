import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-region-card',
  templateUrl: './region-card.component.html',
  styleUrls: ['./region-card.component.scss'],
})
export class RegionCardComponent implements OnInit {
  @Input() name: string = '';
  @Input() url: string = '';

  constructor() {}

  ngOnInit(): void {}
}
