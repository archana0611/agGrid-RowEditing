import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormatCellRendererComponent } from './format-cell-renderer.component';

describe('FormatCellRendererComponent', () => {
  let component: FormatCellRendererComponent;
  let fixture: ComponentFixture<FormatCellRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormatCellRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormatCellRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
