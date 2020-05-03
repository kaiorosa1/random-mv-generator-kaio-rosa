import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MvpageComponent } from './mvpage.component';

describe('MvpageComponent', () => {
  let component: MvpageComponent;
  let fixture: ComponentFixture<MvpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MvpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MvpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
