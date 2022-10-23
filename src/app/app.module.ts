import { CountryDetailsComponent } from './routes/country-details/country-details.component';
import { SharedModule } from './_modules/shared.module';
import { CountryListComponent } from './components/country-list/country-list.component';
import { RegionCardComponent } from './components/region-card/region-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegionListComponent } from './components/region-list/region-list.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './routes/home/home.component';
import { CountriesComponent } from './routes/countries/countries.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    RegionCardComponent,
    CountryListComponent,
    RegionListComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountriesComponent,

    CountryDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
