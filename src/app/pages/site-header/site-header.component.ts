import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SiteHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
