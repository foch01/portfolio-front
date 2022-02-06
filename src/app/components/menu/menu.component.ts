import { Component } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent  {

  switchValue = false;

  constructor(private themeService: ThemeService) {}

  async toggleTheme(): Promise<void> {
    await this.themeService.toggleTheme()
    this.switchValue = this.themeService.currentTheme === 'dark';
  }
}
