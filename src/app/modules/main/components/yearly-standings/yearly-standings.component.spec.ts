import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearlyStandingsComponent } from './yearly-standings.component';

describe('YearlyStandingsComponent', () => {
  let component: YearlyStandingsComponent;
  let fixture: ComponentFixture<YearlyStandingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyStandingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearlyStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
