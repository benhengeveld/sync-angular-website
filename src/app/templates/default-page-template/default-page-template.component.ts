import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page-template',
  templateUrl: './default-page-template.component.html',
  styleUrls: ['./default-page-template.component.scss'],
})
export class DefaultPageTemplateComponent implements OnInit {
  @Input() navbar: boolean = true;
  @Input() crtOverlay: boolean = false;
  @Input() glitchNav: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
