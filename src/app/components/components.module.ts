import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { IconsProviderModule } from '../icons-provider.module';
import { MenuComponent } from './menu/menu.component';
import { ProjectModalComponent } from './modals/project-modal/project-modal.component';
import { PortfolioComponent } from './portfolio/portfolio.component';


@NgModule({
    declarations: [
        MenuComponent,
        PortfolioComponent,
        ProjectModalComponent,
    ],
    imports: [
        CommonModule,
        NzSwitchModule,
        FormsModule,
        NzMenuModule,
        NzButtonModule,
        IconsProviderModule,
        NzCardModule,
    ],
    exports: [
        MenuComponent,
        PortfolioComponent,
    ],
})
export class ComponentsModule { }
