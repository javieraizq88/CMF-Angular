import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcHoyComponent } from './ipc-hoy.component';

describe('IpcHoyComponent', () => {
  let component: IpcHoyComponent;
  let fixture: ComponentFixture<IpcHoyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpcHoyComponent]
    });
    fixture = TestBed.createComponent(IpcHoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
