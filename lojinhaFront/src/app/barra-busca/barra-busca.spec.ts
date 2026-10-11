import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BarraBusca } from './barra-busca';

describe('BarraBusca', () => {
  let component: BarraBusca;
  let fixture: ComponentFixture<BarraBusca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarraBusca],
    }).compileComponents();

    fixture = TestBed.createComponent(BarraBusca);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
