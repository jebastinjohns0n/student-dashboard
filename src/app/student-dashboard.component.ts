// src/app/student-dashboard.component.ts

// Import necessary Angular modules and components
import { Component } from '@angular/core';
import { Student } from './student.model'; // Import the Student interface
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// The StudentDashboardComponent manages the student dashboard functionality.
// It allows users to add, edit, and delete students from the list.
@Component({
  // The selector defines the custom HTML tag that represents this component.
  selector: 'app-student-dashboard',

  // The templateUrl points to the HTML file that contains the component's view.
  templateUrl: './student-dashboard.component.html',

  // The styleUrls array contains paths to the CSS files that style this component.
  styleUrls: ['./student-dashboard.component.css'],

  // The imports array includes necessary Angular modules for this component.
  imports: [CommonModule, FormsModule]
})
export class StudentDashboardComponent {
  // The students property holds an array of Student objects.
  students: Student[] = [];

  // The newStudent property is used to capture input for a new student.
  newStudent: Student = { id: 0, name: '', age: 0 };

  // The addStudent method adds a new student to the students array.
  addStudent() {
    // Check if the new student's name and age are provided.
    if (this.newStudent.name && this.newStudent.age) {
      this.newStudent.id = this.students.length + 1; // Simple ID assignment
      this.students.push({ ...this.newStudent }); // Add the new student to the array
      this.newStudent = { id: 0, name: '', age: 0 }; // Reset input
    }
  }

  // The editStudent method prepares a student for editing.
  editStudent(student: Student) {
    this.newStudent = { ...student }; // Set the newStudent to the selected student
    this.students = this.students.filter(s => s.id !== student.id); // Remove the student from the list
  }

  // The deleteStudent method removes a student from the students array.
  deleteStudent(student: Student) {
    this.students = this.students.filter(s => s.id !== student.id); // Filter out the student to delete
  }
}
