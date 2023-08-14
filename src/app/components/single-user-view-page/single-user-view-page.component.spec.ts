import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleUserViewPageComponent } from './single-user-view-page.component';

describe('SingleUserViewPageComponent', () => {
  let component: SingleUserViewPageComponent;
  let fixture: ComponentFixture<SingleUserViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleUserViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleUserViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
