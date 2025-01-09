import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtmAnualComponent } from './utm-anual.component';

describe('UtmAnualComponent', () => {
  let component: UtmAnualComponent;
  let fixture: ComponentFixture<UtmAnualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UtmAnualComponent]
    });
    fixture = TestBed.createComponent(UtmAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
