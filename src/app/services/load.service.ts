import { Injectable } from "@angular/core";
import { Load } from "../models/Load";

@Injectable({
    providedIn: 'root'
})
export class LoadService {

    loads: Load[];

    getLoads(): Load[] {
        this.loads = [
            { id: 1, capacity: 10, isCompleted: true, jumpers: [ 
                { firstName: "Kim", lastName: "Bernhard", isSelectedFromQueue: false },
                { firstName: "Timo", lastName: "Bernhard", isSelectedFromQueue: false},
                { firstName: "Sandro", lastName: "Walther", isSelectedFromQueue: false },
                { firstName: "Martin", lastName: "Durrer", isSelectedFromQueue: false}
             ] },
            { id: 2, capacity: 10, isCompleted: true, jumpers: [
                { firstName: "Kim", lastName: "Bernhard", isSelectedFromQueue: false },
                { firstName: "Timo", lastName: "Bernhard", isSelectedFromQueue: false},
                { firstName: "Sandro", lastName: "Walther", isSelectedFromQueue: false },
                { firstName: "Martin", lastName: "Durrer", isSelectedFromQueue: false}] },
            { id: 3, capacity: 9, isCompleted: false, jumpers: [
                { firstName: "Kim", lastName: "Bernhard", isSelectedFromQueue: false },
                { firstName: "Timo", lastName: "Bernhard", isSelectedFromQueue: false},
                { firstName: "Sandro", lastName: "Walther", isSelectedFromQueue: false },
                { firstName: "Martin", lastName: "Durrer", isSelectedFromQueue: false}] },
            { id: 4, capacity: 10, isCompleted: false, jumpers: [
                { firstName: "Kim", lastName: "Bernhard", isSelectedFromQueue: false },
                { firstName: "Timo", lastName: "Bernhard", isSelectedFromQueue: false},
                { firstName: "Sandro", lastName: "Walther", isSelectedFromQueue: false },
                { firstName: "Martin", lastName: "Durrer", isSelectedFromQueue: false}] }
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
}