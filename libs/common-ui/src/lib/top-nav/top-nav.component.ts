import { Component, Input, OnInit } from '@angular/core';
import { faBookDead, faSave } from '@fortawesome/free-solid-svg-icons';
import { IconSprite } from '../icon/_models/icon';
import { NavItemConfig } from './_models';

@Component({
  selector: 'homekey-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  @Input() navItems: NavItemConfig[] = []

  ngOnInit(): void {
  }
}
