import { Component, OnInit } from '@angular/core';
import { LoadService } from 'src/app/services/load.service';
import { Load } from 'src/app/models/Load';
import { QueueService } from 'src/app/services/queue.service';
import { Jumper } from 'src/app/models/Jumper';

@Component({
  selector: 'app-manifest-modules-queue-action',
  templateUrl: './queue-action.component.html',
  styleUrls: ['./queue-action.component.css']
})
export class QueueActionComponent implements OnInit {

  private loads: Load[];
  private selectedLoadId: number;

  constructor(private loadService: LoadService, private queueService: QueueService) { }

  ngOnInit() {
    this.initLoads();
  }

  initLoads(): void {
    let allLoads = this.loadService.getLoads();
    this.loads = allLoads.filter((load: Load) => !load.isCompleted).sort((n1, n2) => n1.id - n2.id);
    this.selectedLoadId = this.loads[0].id;
  }

  onClickAssign() {
    let queuedJumpers: Jumper[] = this.queueService.getJumpers();
    let selectedJumpers = queuedJumpers.filter((jumper: Jumper) => jumper.isSelectedFromQueue);
    console.log(selectedJumpers);
    console.log(queuedJumpers);
  }

}
