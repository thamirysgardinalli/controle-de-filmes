import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenhumFilmeComponent } from './nenhum-filme.component';

describe('NenhumFilmeComponent', () => {
  let component: NenhumFilmeComponent;
  let fixture: ComponentFixture<NenhumFilmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NenhumFilmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenhumFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
