import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ScryfallCardData } from '../models/ScryfallCardData ';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScryFallService {
  private baseUrl: string = 'https://api.scryfall.com/cards';

  constructor(private http: HttpClient) {}

  public getCardInfo(
    setCode: string,
    cardNum: string
  ): Observable<ScryfallCardData> {
    return this.http.get<ScryfallCardData>(
      `${this.baseUrl}/${setCode.toLowerCase()}/${cardNum.replace(/^0+/, '')}`,
      {}
    );
  }
}
