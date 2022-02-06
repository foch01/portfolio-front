import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import fr from '@angular/common/locales/fr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { fr_FR, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
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
    ],
    providers: [AppInitializerProvider, { provide: NZ_I18N, useValue: fr_FR }],
    bootstrap: [AppComponent],
})
export class AppModule { }
