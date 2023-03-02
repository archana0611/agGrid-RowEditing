import { Component ,Input} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import {
  columnDefs,
  rowData,
  defaultColDef,
} from "src/app/shared/constants/grid-config";
import { AgGridAngular } from "ag-grid-angular";
import {
  GridReadyEvent,
  RowSelectedEvent,
  ValueFormatterParams,
} from "ag-grid-community";
import "ag-grid-enterprise";
import { IconCellRendererComponent } from '../shared/cell-renderer/icon-cell-renderer/icon-cell-renderer.component';
@Component({
  selector: 'app-editing-dialog',
  templateUrl: './editing-dialog.component.html',
  styleUrls: ['./editing-dialog.component.scss']
})
export class EditingDialogComponent {
  
  columnDefs = columnDefs;
  rowData = rowData;
  defaultColDef = defaultColDef;
  frameworkComponents = {
    iconCellRendererComponent: IconCellRendererComponent,
  };
  public fileGridOptions: any = {
    sortingOrder: ["desc", "asc", null],
    rowSelection: "single",
    suppressRowClickSelection: true,
    suppressAggFuncInHeader: true,
    pivotMode: false,
    suppressColumnVirtualisation: true,
    debounceVerticalScrollbar: true,
  };
  public editType: "fullRow" = "fullRow";
  dropdownList: string[] = [
    'Authorized Signer',
    'Contact Manager',
    'Interested Party ',
    'Tax Advisor',

  ];
  isDropdownOpen: boolean = false;
  //hiding info box
  visible:boolean = false;
   disabled: boolean = true;


  //onclick toggling both
  onclick()
  {
console.log(545454);
    this.visible = !this.visible;
    this.disabled = !this.disabled;
  }

}
