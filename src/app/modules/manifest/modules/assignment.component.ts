import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { QueueItem } from 'src/app/models/QueueItem';
import { Load } from 'src/app/models/Load';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-manifest-modules-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  
  assignedLoads: QueueItem[] = [
    { loadId:1, person: { firstName: 'Michele', lastName: 'Stüdeli', isSelectedFromQueue: false }},
    { loadId:1, person: { firstName: 'Joèl', lastName: 'Klingler', isSelectedFromQueue: false }},
    { loadId:1, person: { firstName: 'Beni', lastName: 'Keller', isSelectedFromQueue: false }},
  ];

  queue: QueueItem[] = [
    { loadId:1, person: { firstName: 'Timo', lastName: 'Bernhard', isSelectedFromQueue: false }},
    { loadId:1, person: { firstName: 'Kim', lastName: 'Bernhard', isSelectedFromQueue: false }},
    { loadId:1, person: { firstName: 'Sandro', lastName: 'Walther', isSelectedFromQueue: false }},
  ];

  loads: Load[];
  
  constructor(private loadService: LoadService) { }

  ngOnInit() {
    this.loads = this.loadService.getLoads();
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

}
