import { NavService } from './../../_services/nav.service';
import { filter, map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public navService: NavService) {}

  ngOnInit(): void {}
}
