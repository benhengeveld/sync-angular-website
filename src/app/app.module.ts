import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MagicPricePageComponent } from './pages/magic-price-page/magic-price-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { DefaultPageTemplateComponent } from './templates/default-page-template/default-page-template.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { CrtOverlayComponent } from './components/crt-overlay/crt-overlay.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { SvgLinkComponent } from './components/svg-link/svg-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    MagicPricePageComponent,
    PageNotFoundComponent,
    DefaultPageTemplateComponent,
    BackgroundImageComponent,
    CrtOverlayComponent,
    NavbarComponent,
    CardItemComponent,
    SvgIconComponent,
    SvgLinkComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
