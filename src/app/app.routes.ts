// src/app/app.routes.ts

// Import necessary Angular modules and components
import { Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard.component'; // Import the StudentDashboardComponent

// The routes array defines the application's routing configuration.
export const routes: Routes = [
  // Route for the student dashboard component
  { path: 'students', component: StudentDashboardComponent },

  // Redirect the empty path to the students route
  { path: '', redirectTo: '/students', pathMatch: 'full' }
];
