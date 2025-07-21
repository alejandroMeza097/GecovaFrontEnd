import { ComponentFixture, TestBed } from '@angular/core/testing';

import { peticiones } from './peticiones';

describe('Peticiones', () => {
  let component: Peticiones;
  let fixture: ComponentFixture<Peticiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peticiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peticiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
