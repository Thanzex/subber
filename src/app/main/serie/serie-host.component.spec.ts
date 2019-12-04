import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieHostComponent } from './serie-host.component';

describe('SerieHostComponent', () => {
  let component: SerieHostComponent;
  let fixture: ComponentFixture<SerieHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
