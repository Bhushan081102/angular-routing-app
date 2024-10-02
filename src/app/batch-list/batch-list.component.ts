import { Component } from '@angular/core';

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
export class BatchListComponent {
  batches = [
    { id: 'B001', name: 'Batch 1' },
    { id: 'B002', name: 'Batch 2' },
    { id: 'B003', name: 'Batch 3' },
    { id: 'B004', name: 'Batch 4' },
    { id: 'B005', name: 'Batch 5' }
  ];
}
