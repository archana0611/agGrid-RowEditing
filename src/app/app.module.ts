import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { GocentralDesignkitModule } from 'gocentral-design';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatDialogModule } from '@angular/material/dialog';
import { IconCellRendererComponent } from 'src/app/shared/cell-renderer/icon-cell-renderer/icon-cell-renderer.component';
import { StatusCellRendererComponent } from 'src/app/shared/cell-renderer/status-cell-renderer/status-cell-renderer.component';
import { SymbolCellRendererComponent } from 'src/app/shared/cell-renderer/symbol-cell-renderer/symbol-cell-renderer.component';
import { DateCellRendererComponent } from 'src/app/shared/cell-renderer/date-cell-renderer/date-cell-renderer.component';
import { FormatCellRendererComponent } from 'src/app/shared/cell-renderer/format-cell-renderer/format-cell-renderer.component';
import { HyperlinkCellRendererComponent } from 'src/app/shared/cell-renderer/hyperlink-cell-renderer/hyperlink-cell-renderer.component';
import { AppComponent } from './app.component';
import { EditingDialogComponent } from './editing-dialog/editing-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    IconCellRendererComponent,
    StatusCellRendererComponent,
    SymbolCellRendererComponent,
    DateCellRendererComponent,
    FormatCellRendererComponent,
    HyperlinkCellRendererComponent, 
    EditingDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GocentralDesignkitModule,
    AgGridModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
