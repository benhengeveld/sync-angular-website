import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
  @Input() src: string = '';
  @Input() glitch: boolean = false;
  @Input() tooltipText: string = '';
  @Input() size: string = '5em';

  constructor() {}

  ngOnInit(): void {}
}
