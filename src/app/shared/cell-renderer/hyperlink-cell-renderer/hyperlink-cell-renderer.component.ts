import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-hyperlink-cell-renderer',
  templateUrl: './hyperlink-cell-renderer.component.html',
  styleUrls: ['./hyperlink-cell-renderer.component.scss'],
})
export class HyperlinkCellRendererComponent
  implements ICellRendererAngularComp
{
  params: any;
  value?: string;
  anchorLabel: string = 'test';

  agInit(params: any): void {
    // console.log(params);
    this.params = params;
    this.value = params.value;
    this.anchorLabel = params.value;
    this.params.refreshCell();
  }

  refresh(params: any): boolean {
    this.params = params;
    this.value = params.value;
    this.anchorLabel = params.label;
    this.params.refreshCell();

    return true;
  }

  onAnchorClick(event: any) {
    event.preventDefault();
    this.params.context.componentParent.launch(this.value);
  }
}
