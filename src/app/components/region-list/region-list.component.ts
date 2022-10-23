import { regionsList } from './../../_services/regions.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface RegionPreview {
  name: string;
  url: string;
}

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.scss'],
})
export class RegionListComponent implements OnInit {
  regions = regionsList;
  constructor() {}

  ngOnInit(): void {}
}
