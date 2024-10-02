import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students = [
    { id: 1, name: 'John Doe', batchNumber: 101 },
    { id: 2, name: 'Jane Smith', batchNumber: 102 },
    { id: 3, name: 'Bob Johnson', batchNumber: 103 },
    { id: 4, name: 'Alice Williams', batchNumber: 104 },
    { id: 5, name: 'David Brown', batchNumber: 105 }
  ];
}
