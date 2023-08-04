import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-image',
  templateUrl: './background-image.component.html',
  styleUrls: ['./background-image.component.scss'],
})
export class BackgroundImageComponent implements OnInit {
  @Input() crtBackground: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
