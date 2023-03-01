import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-format-cell-renderer',
  templateUrl: './format-cell-renderer.component.html',
  styleUrls: ['./format-cell-renderer.component.scss'],
})
export class FormatCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  format: any;
  anchorLabel: string = 'test';
  darkTheme: boolean = false;

  showPowerpoint: boolean = false;
  showWord: boolean = false;
  showPDF: boolean = false;
  showXLS: boolean = false;

  iconList = [];

  agInit(params: any): void {
    // console.log(params);
    this.params = params;
    this.format = params.data.format;
    this.anchorLabel = params.label;

    if (params.theme == 'dark') {
      this.darkTheme = true;
    }

    this.iconList = this.format.split('-');
    for (let i = 0; i < this.iconList.length; i++) {
      if (this.iconList[i] == 'powerpoint') {
        this.showPowerpoint = true;
      }
      if (this.iconList[i] == 'word') {
        this.showWord = true;
      }
      if (this.iconList[i] == 'pdf') {
        this.showPDF = true;
      }
      if (this.iconList[i] == 'xls') {
        this.showXLS = true;
      }
    }

    this.params.refreshCell();
  }

  refresh(params: any): boolean {
    this.params = params;
    this.format = params.data.format;
    this.anchorLabel = params.label;

    if (params.theme == 'dark') {
      this.darkTheme = true;
    }

    this.iconList = this.format.split('-');

    this.params.refreshCell();

    return true;
  }
}
