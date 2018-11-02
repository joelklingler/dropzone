import { Component, OnInit } from '@angular/core';
import { Load } from 'src/app/models/Load';
import { LoadService } from 'src/app/services/load.service';

@Component({
  selector: 'app-manifest-modules-loads',
  templateUrl: './loads.component.html',
  styleUrls: ['./loads.component.css']
})
export class LoadsComponent implements OnInit {
  
  showCompletedLoads: boolean = false;

  _loads: Load[];
  get loads(): Load[] {
    let filteredLoads = this._loads.filter((load: Load) => this.showCompletedLoads ? true : !load.isCompleted);
    return filteredLoads;
  }
  set loads(value: Load[]) {
    this._loads = value;
  }

  constructor(private loadService: LoadService) { }

  ngOnInit() {
    this.loads = this.loadService.getLoads();
  }

  onShowCompletedLoadsCheckboxChanged() {
    this.showCompletedLoads = !this.showCompletedLoads;
    console.log(this.showCompletedLoads);
  }

  onClickAddLoad() {
    this._loads.push({ id: this.loads[this.loads.length + 1].id + 1, capacity: 10, isCompleted: false, jumpers: []});
  }

}
