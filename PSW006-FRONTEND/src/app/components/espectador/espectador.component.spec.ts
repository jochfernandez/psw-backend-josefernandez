import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspectadorComponent } from './espectador.component';

describe('EspectadorComponent', () => {
  let component: EspectadorComponent;
  let fixture: ComponentFixture<EspectadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspectadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
