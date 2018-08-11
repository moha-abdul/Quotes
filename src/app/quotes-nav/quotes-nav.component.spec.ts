import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesNavComponent } from './quotes-nav.component';

describe('QuotesNavComponent', () => {
  let component: QuotesNavComponent;
  let fixture: ComponentFixture<QuotesNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
