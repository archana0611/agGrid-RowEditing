import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss'],
})
export class HeaderContentComponent implements OnInit {
  @Input() headerText: string = 'Header Text';
  @Input() cardHeight: string = 'auto';

  constructor() {}

  ngOnInit(): void {}
}
