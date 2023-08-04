import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  MatSnackBar,
  MatSnackBarRef,
  TextOnlySnackBar,
} from '@angular/material/snack-bar';
import { ScryfallCardData } from 'src/app/models/ScryfallCardData ';
import { PricingService } from 'src/app/services/pricing.service';
import { ScryFallService } from 'src/app/services/scry-fall.service';

@Component({
  selector: 'app-magic-price-page',
  templateUrl: './magic-price-page.component.html',
  styleUrls: ['./magic-price-page.component.scss'],
})
export class MagicPricePageComponent implements OnInit {
  searchControl: FormControl = new FormControl('');

  loading: boolean = false;

  cardImage: string | undefined;
  cardSetName: string | undefined;
  cardNormalPrice: string | undefined;
  cardFoilPrice: string | undefined;
  cardEtchedPrice: string | undefined;

  constructor(
    private scryFallService: ScryFallService,
    private pricingService: PricingService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  search(): void {
    let searchStr = this.searchControl.value;
    searchStr = searchStr.replace(' ', '');

    let setCode = searchStr.substring(0, 3);
    let cardNumber = searchStr.substring(3, searchStr.length);

    if (setCode.length !== 3) {
      const errorText = 'Invalid set code';
      console.error(errorText);
      this.openSnackbar(errorText, 'Close', 3000);
      return;
    } else if (!cardNumber || Number.isNaN(Number(cardNumber))) {
      const errorText = 'Invalid card number';
      console.error(errorText);
      this.openSnackbar(errorText, 'Close', 3000);
      return;
    }

    this.getCard(setCode, cardNumber);
  }

  getCard(setCode: string, cardNumber: string): void {
    this.loading = true;

    this.cardImage = undefined;
    this.cardSetName = undefined;
    this.cardNormalPrice = undefined;
    this.cardFoilPrice = undefined;
    this.cardEtchedPrice = undefined;

    this.scryFallService.getCardInfo(setCode, cardNumber).subscribe({
      next: (card: ScryfallCardData) => {
        this.cardImage = this.getCardsImage(card);
        this.cardSetName = card.set_name;
        this.cardNormalPrice = this.getCadPrice(card.prices.usd);
        this.cardFoilPrice = this.getCadPrice(card.prices.usd_foil);
        this.cardEtchedPrice = this.getCadPrice(card.prices.usd_etched);

        this.searchControl.setValue('');
        this.loading = false;
      },
      error: (error: any) => {
        console.error(error);

        const errorText = 'Invalid card code';
        console.error(errorText);
        this.openSnackbar(errorText, 'Close', 3000);

        this.loading = false;
      },
    });
  }

  getCadPrice(price: string | undefined | null): string {
    if (price == undefined || price == null) {
      return '';
    }

    let priceNum = Number(price);
    if (!isNaN(priceNum)) {
      let cadPrice = this.pricingService.usdToCad(priceNum);
      return `${cadPrice.toFixed(2)} CAD`;
    } else {
      return '';
    }
  }

  getCardsImage(card: ScryfallCardData | undefined): string {
    if (card == undefined) {
      return '';
    }

    if (card.image_uris && card.image_uris.png) {
      return card.image_uris.png;
    }

    if (
      card.card_faces &&
      card.card_faces[0].image_uris &&
      card.card_faces[0].image_uris.png
    ) {
      return card.card_faces[0].image_uris.png;
    }
    return '';
  }

  openSnackbar(
    message: string,
    btnText: string,
    duration: number
  ): MatSnackBarRef<TextOnlySnackBar> {
    return this.snackBar.open(message, btnText, {
      duration: duration,
      panelClass: ['error-snackbar'],
      horizontalPosition: 'start',
    });
  }
}
