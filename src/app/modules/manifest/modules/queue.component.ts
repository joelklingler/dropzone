import { Component, OnInit } from '@angular/core';
import { IJumper } from 'src/app/models/IJumper';

@Component({
  selector: 'app-manifest-modules-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  jumpers: IJumper[] = [
    { firstName: 'Michele', lastName: 'Stüdeli'},
    { firstName: 'Joèl', lastName: 'Klingler'},
    { firstName: 'Beni', lastName: 'Keller'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
