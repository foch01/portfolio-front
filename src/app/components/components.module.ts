import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { IconsProviderModule } from '../icons-provider.module';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule,
    NzMenuModule,
    NzButtonModule,
    IconsProviderModule,
  ],
  exports: [
    MenuComponent,
  ],
})
export class ComponentsModule { }
