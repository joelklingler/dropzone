import { Jumper } from "../models/Jumper";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class QueueService {
    queue: Jumper[] = [
        { id: 1, firstName: 'Michele', lastName: 'Stüdeli', isSelectedFromQueue: false},
        { id: 2, firstName: 'Joèl', lastName: 'Klingler', isSelectedFromQueue: false},
        { id: 3, firstName: 'Beni', lastName: 'Keller', isSelectedFromQueue: false},
        { id: 4, firstName: 'Martin', lastName: 'Durrer', isSelectedFromQueue: false}
      ];

    getJumpers(): Jumper[] {
        return this.queue;
    }

    removeJumpers(jumpers: Jumper[]): void {
        console.log(jumpers);
        jumpers.forEach(jumper => {
            let jumperToDelete = this.queue.find((x: Jumper) => x.id == jumper.id);
            let indexToDelete = this.queue.indexOf(jumperToDelete);
            this.queue.splice(indexToDelete, 1);
        });
    }
}