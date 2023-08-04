import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-link',
  templateUrl: './svg-link.component.html',
  styleUrls: ['./svg-link.component.scss'],
})
export class SvgLinkComponent implements OnInit {
  @Input() src: string = '';
  @Input() glitch: boolean = false;
  @Input() href: string = '';
  @Input() size: string = '5em';

  constructor() {}

  ngOnInit(): void {}
}
