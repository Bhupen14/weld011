import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxstartComponent } from './boxstart.component';

describe('BoxstartComponent', () => {
  let component: BoxstartComponent;
  let fixture: ComponentFixture<BoxstartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxstartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
