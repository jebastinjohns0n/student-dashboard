// src/app/app.config.ts

// Import necessary Angular modules and functions
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; // Import the defined routes for the application
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// The appConfig object defines the configuration for the Angular application.
export const appConfig: ApplicationConfig = {
  // The providers array includes services and configurations needed for the application.
  providers: [
    // Enable zone change detection with event coalescing for better performance.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provide the router with the defined routes for navigation.
    provideRouter(routes),

    // Enable client hydration with event replay for better user experience.
    provideClientHydration(withEventReplay())
  ]
};
