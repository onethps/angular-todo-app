import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoImputComponent } from './todo-imput.component';

describe('TodoImputComponent', () => {
  let component: TodoImputComponent;
  let fixture: ComponentFixture<TodoImputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoImputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoImputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
