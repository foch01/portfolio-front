import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import fr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { fr_FR, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { AppInitializerProvider } from './app-initializer.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';

registerLocaleData(fr);

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NzLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ComponentsModule,
        NzButtonModule,
        NzIconModule,
        NzDividerModule,
        NzCarouselModule,
        NzStepsModule,
        NzBadgeModule,
    ],
    providers: [AppInitializerProvider, { provide: NZ_I18N, useValue: fr_FR }],
    bootstrap: [AppComponent],
})
export class AppModule { }
