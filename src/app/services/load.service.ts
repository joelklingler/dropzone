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
            { id: 1, capacity: 10, isCompleted: true, jumpers: [] },
            { id: 2, capacity: 10, isCompleted: true, jumpers: [] },
            { id: 3, capacity: 9, isCompleted: false, jumpers: [] },
            { id: 4, capacity: 10, isCompleted: false, jumpers: [] }
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
            return true;
        }
    }
}