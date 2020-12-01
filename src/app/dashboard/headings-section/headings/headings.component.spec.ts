import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeadingsComponent } from './headings.component';

describe('HeadingsComponent', () => {
  let component: HeadingsComponent;
  let fixture: ComponentFixture<HeadingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
