import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-icon-cell-renderer',
  templateUrl: './icon-cell-renderer.component.html',
  styleUrls: ['./icon-cell-renderer.component.scss'],
})
export class IconCellRendererComponent implements ICellRendererAngularComp {
  params: any;
  anchorLabel: string = 'test';
  darkTheme: boolean = false;

  agInit(params: any): void {
    // console.log(params);
    this.params = params;
    this.anchorLabel = params.label;

    if (params.theme == 'dark') {
      this.darkTheme = true;
    }

    this.params.refreshCell();
  }

  refresh(params: any): boolean {
    this.params = params;
    this.anchorLabel = params.label;

    if (params.theme == 'dark') {
      this.darkTheme = true;
    }

    this.params.refreshCell();

    return true;
  }

  onAnchorClick(event: any) {
    event.preventDefault();
  }
}
