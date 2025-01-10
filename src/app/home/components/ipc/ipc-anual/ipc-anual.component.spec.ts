import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpcAnualComponent } from './ipc-anual.component';

describe('IpcAnualComponent', () => {
  let component: IpcAnualComponent;
  let fixture: ComponentFixture<IpcAnualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IpcAnualComponent]
    });
    fixture = TestBed.createComponent(IpcAnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
