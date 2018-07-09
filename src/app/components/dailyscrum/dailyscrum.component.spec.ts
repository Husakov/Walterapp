import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyscrumComponent } from './dailyscrum.component';

describe('DailyscrumComponent', () => {
  let component: DailyscrumComponent;
  let fixture: ComponentFixture<DailyscrumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyscrumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyscrumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
