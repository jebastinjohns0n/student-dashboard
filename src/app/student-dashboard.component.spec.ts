// src/app/student-dashboard.component.spec.ts

// Import necessary testing modules and components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentDashboardComponent } from './student-dashboard.component';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

describe('StudentDashboardComponent', () => {
  let component: StudentDashboardComponent; // Declare a variable for the component
  let fixture: ComponentFixture<StudentDashboardComponent>; // Declare a variable for the component fixture

  // Set up the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentDashboardComponent], // Declare the StudentDashboardComponent for testing
      imports: [FormsModule, RouterOutlet] // Import necessary modules
    }).compileComponents();

    // Create the component fixture and instance
    fixture = TestBed.createComponent(StudentDashboardComponent);
    component = fixture.componentInstance; // Get the instance of the component
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to check if the component is created successfully
  it('should create the student dashboard', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy
  });

  // Test to check if the initial students array is empty
  it('should have an empty students array initially', () => {
    expect(component.students.length).toBe(0); // Expect the students array to be empty
  });

  // Test the addStudent method
  it('should add a student to the students array', () => {
    component.newStudent = { id: 1, name: 'John Doe', age: 20 }; // Set a new student
    component.addStudent(); // Call the addStudent method
    expect(component.students.length).toBe(1); // Expect the students array to have one student
    expect(component.students[0].name).toEqual('John Doe'); // Expect the added student to have the correct name
  });
});
