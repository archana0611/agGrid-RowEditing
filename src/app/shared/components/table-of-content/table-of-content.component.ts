import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-table-of-content',
  templateUrl: './table-of-content.component.html',
  styleUrls: ['./table-of-content.component.scss'],
})
export class TableOfContentComponent implements OnInit, OnChanges {
  @Input() contentList = [
    { name: 'Primary', frag: '#primary', isActive: true },
  ];

  @Input() sectionInView: number = 0;
  @Input() height: string = '182px';

  @Output() contentClick = new EventEmitter();

  contentListCopy = this.contentList;

  sectionActive = [true, false, false, false];

  constructor() {}

  ngOnInit(): void {
    this.contentListCopy = this.contentList;
    console.log(this.contentListCopy);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sectionInView'] && !changes['sectionInView'].firstChange) {
      this.setActiveSection(this.sectionInView);
    }
  }

  contentClickHandler(frag: string, index: number) {
    const contentObj = {
      frag: frag,
      index: index,
    };
    this.contentClick.emit(contentObj);

    this.setActiveSection(index);
  }

  setActiveSection(index: number) {
    for (let i = 0; i < this.sectionActive.length; i++) {
      if (index == i) {
        this.sectionActive[i] = true;
      } else {
        this.sectionActive[i] = false;
      }
    }
  }
}
