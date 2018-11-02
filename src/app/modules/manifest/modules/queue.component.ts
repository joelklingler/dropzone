import { Component, OnInit } from '@angular/core';
import { Jumper } from 'src/app/models/Jumper';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-manifest-modules-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  jumpers: Jumper[] = [
    { firstName: 'Michele', lastName: 'Stüdeli'},
    { firstName: 'Joèl', lastName: 'Klingler'},
    { firstName: 'Beni', lastName: 'Keller'}
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

}
