import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserDataPageComponent } from './update-user-data-page.component';

describe('UpdateUserDataPageComponent', () => {
  let component: UpdateUserDataPageComponent;
  let fixture: ComponentFixture<UpdateUserDataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateUserDataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateUserDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
