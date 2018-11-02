import { Injectable } from "@angular/core";
import { Load } from "../models/Load";

@Injectable({
    providedIn: 'root'
})
export class LoadService {
    getLoads(): Load[] {
        return [
            { id: 1, capacity: 10, isCompleted: true, jumpers: [ 
                { firstName: "Kim", lastName: "Bernhard" },
                { firstName: "Timo", lastName: "Bernhard"},
                { firstName: "Sandro", lastName: "Walther" },
                { firstName: "Martin", lastName: "Durrer"}
             ] },
            { id: 2, capacity: 10, isCompleted: true, jumpers: [{ firstName: "Kim", lastName: "Bernhard" },
            { firstName: "Timo", lastName: "Bernhard"},
            { firstName: "Sandro", lastName: "Walther" },
            { firstName: "Martin", lastName: "Durrer"}] },
            { id: 3, capacity: 9, isCompleted: true, jumpers: [{ firstName: "Kim", lastName: "Bernhard" },
            { firstName: "Timo", lastName: "Bernhard"},
            { firstName: "Sandro", lastName: "Walther" },
            { firstName: "Martin", lastName: "Durrer"}] },
            { id: 4, capacity: 10, isCompleted: false, jumpers: [{ firstName: "Kim", lastName: "Bernhard" },
            { firstName: "Timo", lastName: "Bernhard"},
            { firstName: "Sandro", lastName: "Walther" },
            { firstName: "Martin", lastName: "Durrer"}] }
        ]
    }
}