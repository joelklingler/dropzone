import { Component, OnInit } from '@angular/core';
import { Jumper } from 'src/app/models/Jumper';
import { QueueService } from 'src/app/services/queue.service';

@Component({
  selector: 'app-manifest-modules-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  jumpers: Jumper[];

  constructor(private queueService: QueueService) { }

  ngOnInit() {
    this.jumpers = this.queueService.getQueuedJumpers();
  }
}
