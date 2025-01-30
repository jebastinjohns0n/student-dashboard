// src/app/app.component.spec.ts

// Import necessary testing modules and components
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';

// Describe the test suite for the AppComponent
describe('AppComponent', () => {
  let component: AppComponent; // Declare a variable for the component
  let fixture: ComponentFixture<AppComponent>; // Declare a variable for the component fixture

  // Set up the testing module before each test
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent], // Declare the AppComponent for testing
      imports: [RouterOutlet] // Import necessary modules
    }).compileComponents();

    // Create the component fixture and instance
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // Get the instance of the component
    fixture.detectChanges(); // Trigger change detection
  });

  // Test to check if the component is created successfully
  it('should create the app', () => {
    expect(component).toBeTruthy(); // Expect the component to be truthy
  });

  // Test to check if the title property is set correctly
  it(`should have as title 'student-dashboard'`, () => {
    expect(component.title).toEqual('student-dashboard'); // Expect the title to equal 'student-dashboard'
  });
});
