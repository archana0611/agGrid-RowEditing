import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HyperlinkCellRendererComponent } from '../../cell-renderer/hyperlink-cell-renderer/hyperlink-cell-renderer.component';

import {
  rowClass,
  defaultColDefModal,
  columnDefsPopup,
  rowDataPopup,
} from '../../constants/grid-config';

@Component({
  selector: 'app-grid-dialog',
  templateUrl: './grid-dialog.component.html',
  styleUrls: ['./grid-dialog.component.scss'],
})
export class GridDialogComponent implements OnInit {
  formatList: Array<string> = ['Web', 'XLS', 'PDf', 'Word'];

  context = {
    componentParent: this,
  };

  frameworkComponents = {
    hyperlinkCellRendererComponent: HyperlinkCellRendererComponent,
  };

  rowClass = rowClass;
  defaultColDefModal = defaultColDefModal;
  columnDefsPopup = columnDefsPopup;
  rowDataPopup = rowDataPopup;

  constructor(
    @Optional() public dialogRef: MatDialogRef<GridDialogComponent>
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close(false);
  }

  gridPopupReadyHandler(event: any) {}
}
