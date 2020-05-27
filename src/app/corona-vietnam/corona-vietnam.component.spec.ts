import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaVietnamComponent } from './corona-vietnam.component';

describe('CoronaVietnamComponent', () => {
  let component: CoronaVietnamComponent;
  let fixture: ComponentFixture<CoronaVietnamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaVietnamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaVietnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
