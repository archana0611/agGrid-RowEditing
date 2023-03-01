import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-date-cell-renderer',
  templateUrl: './date-cell-renderer.component.html',
  styleUrls: ['./date-cell-renderer.component.scss'],
})
export class DateCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  anchorLabel: string = 'test';
  dateString: string = '';
  dateTime: string = '';
  darkTheme: boolean = false;

  agInit(params: any): void {
    // console.log(params);
    this.params = params;
    this.anchorLabel = params.label;
    this.dateString = params.data.dateString;
    this.dateTime = params.data.dateTime;
    if (params.theme == 'dark') {
      this.darkTheme = true;
    }
    this.params.refreshCell();
  }

  refresh(params: any): boolean {
    this.params = params;
    this.anchorLabel = params.label;
    this.dateString = params.data.dateString;
    this.dateTime = params.data.dateTime;
    if (params.theme == 'dark') {
      this.darkTheme = true;
    }
    this.params.refreshCell();

    return true;
  }
}
