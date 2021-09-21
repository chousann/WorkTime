import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DakaComponent } from './daka.component';

describe('DakaComponent', () => {
  let component: DakaComponent;
  let fixture: ComponentFixture<DakaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DakaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
