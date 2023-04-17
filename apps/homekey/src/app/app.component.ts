import { Component, OnInit } from '@angular/core';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';
import { NavItemConfig } from '@homekey/common-ui'
import { IconSprite } from '@homekey/common-ui';

@Component({
  selector: 'homekey-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'homekey';
  navItems: NavItemConfig[] = []

    ngOnInit(): void {
      this.navItems = [
        {
          text: "Properties",
          icon: {
            code: faBookDead,
            sprite: IconSprite.Solid,
            color: "#fffff"
          },
          link: "/properties"
        }
      ]
    }
}
