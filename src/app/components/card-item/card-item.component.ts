import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cardTitle: string | undefined;
  @Input() height: string | undefined;
  @Input() marginBottom: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
