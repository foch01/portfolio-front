import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
})
export class MenuComponent implements OnInit {

  isDarkMode = false;
  isHideMenu = false;
  isDisplayDropDownMenu = false;
  iconMenu = 'menu';

  constructor(
      private readonly themeService: ThemeService,
      private readonly breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(['(max-width: 991px)']).subscribe((state: BreakpointState) => {
      this.isHideMenu = state.matches;
      this.isDisplayDropDownMenu = state.matches;
    });
  }

  async toggleTheme(): Promise<void> {
    await this.themeService.toggleTheme();
    this.isDarkMode = this.themeService.currentTheme === 'dark';
  }

  handleDropDownMenu(): void {
    this.isHideMenu = !this.isHideMenu;
    if (!this.isHideMenu) {
      this.iconMenu = 'close';
    } else {
      this.iconMenu = 'menu';
    }
  }
}
