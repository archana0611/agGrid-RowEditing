import { Component, OnInit, Optional } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss'],
})
export class FormDialogComponent implements OnInit {
  date: any = {
    startDate: new Date('2022 12 01'),
    endDate: new Date('2022 12 01'),
  };

  countryList: Array<string> = ['India', 'USA'];
  countryControl = new FormControl('India');

  checkboxValue: boolean = false;

  zip: string = '122001';

  constructor(
    @Optional() public dialogRef: MatDialogRef<FormDialogComponent>
  ) {}

  ngOnInit(): void {}

  onClose() {
    this.dialogRef.close(false);
  }

  setCheckboxValue(event: any) {
    this.checkboxValue = event;
  }
}
