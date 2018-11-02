import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Load } from 'src/app/models/Load';
import { LoadService } from 'src/app/services/load.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-manifest-modules-loads',
  templateUrl: './loads.component.html',
  styleUrls: [
    './loads.component.css',
    './loads.dragdrop.component.css']
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

  constructor(private loadService: LoadService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loads = this.loadService.getLoads();
  }

  onShowCompletedLoadsCheckboxChanged() {
    this.showCompletedLoads = !this.showCompletedLoads;
  }

  onClickAddLoad() {
    //this._loads.push({ id: this._loads[this._loads.length -1].id + 1, capacity: 10, isCompleted: false, jumpers: []});
    this.loadService.addLoad();
    this.snackBar.open(`Load ${this._loads[this._loads.length - 1].id} erstellt.`, null, { duration: 2000 });
  }

  
}
