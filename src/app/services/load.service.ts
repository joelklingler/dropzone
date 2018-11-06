import { Injectable } from "@angular/core";
import { Load } from "../models/Load";
import { Jumper } from "../models/Jumper";

@Injectable({
    providedIn: 'root'
})
export class LoadService {

    loads: Load[];

    getLoads(): Load[] {
        this.loads = [
            { id: 1, capacity: 10, isCompleted: true, jumpers: [], canBeCompleted: false },
            { id: 2, capacity: 10, isCompleted: true, jumpers: [], canBeCompleted: false },
            { id: 3, capacity: 9, isCompleted: false, jumpers: [], canBeCompleted: false },
            { id: 4, capacity: 10, isCompleted: false, jumpers: [], canBeCompleted: false }
        ];
        return this.loads;
    }

    addLoad(): void {
        var load = new Load();
        var newId = this.loads[this.loads.length - 1].id + 1;
        load.id = newId;
        load.capacity = 10;
        load.isCompleted = false;
        load.jumpers = [];
        
        this.loads.push(load);
    }

    addJumpersToLoad(jumpers: Jumper[], loadId: number): boolean {
        let load = this.loads.find((load: Load) => load.id == loadId);
        
        let loadCapacity = load.capacity;
        let jumpersInLoad = load.jumpers.length;
        
        if(jumpersInLoad + jumpers.length > loadCapacity) {
            return false;
        } else {
            jumpers.forEach(jumper => {
                load.jumpers.push(jumper);
            });
            this.setLoadCanBeCompleted(loadId);
            return true;
        }
    }

    removeJumperFromLoad(jumperId: number, loadId: number) {
        let load = this.loads.find((load: Load) => load.id == loadId);

        let jumper = load.jumpers.find((x: Jumper) => x.id == jumperId);
        let jumperIndex = load.jumpers.indexOf(jumper);
        load.jumpers.splice(jumperIndex, 1);
        this.setLoadCanBeCompleted(loadId);
    }

    completeLoad(loadId: number) {
        let load = this.loads.find((load: Load) => load.id == loadId);
        load.isCompleted = true;
    }

    private setLoadCanBeCompleted(loadId: number): void {
        let load = this.loads.find((x: Load) => x.id == loadId);
        load.canBeCompleted = load.jumpers.length >= 7;
    }
}