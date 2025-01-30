// src/app/app.component.ts

// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// The AppComponent serves as the root component of the Angular application.
// It is responsible for rendering the main layout and managing the overall application state.
@Component({
  // The selector defines the custom HTML tag that represents this component.
  selector: 'app-root',

  // The templateUrl points to the HTML file that contains the component's view.
  templateUrl: './app.component.html',

  // The styleUrls array contains paths to the CSS files that style this component.
  styleUrls: ['./app.component.css'],

  // The imports array includes necessary Angular modules for this component.
  imports: [RouterOutlet, CommonModule, FormsModule]
})
export class AppComponent {
  // The title property holds the title of the application, which can be used in the template.
  title = 'student-dashboard';
}
