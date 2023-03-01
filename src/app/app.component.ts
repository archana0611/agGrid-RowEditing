import { Component } from "@angular/core";
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
import { IconCellRendererComponent } from "./shared/cell-renderer/icon-cell-renderer/icon-cell-renderer.component";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
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
}
