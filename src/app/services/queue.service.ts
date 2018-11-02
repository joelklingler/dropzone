import { Jumper } from "../models/Jumper";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class QueueService {
    queue: Jumper[] = [
        { firstName: 'Michele', lastName: 'Stüdeli', isSelectedFromQueue: false},
        { firstName: 'Joèl', lastName: 'Klingler', isSelectedFromQueue: false},
        { firstName: 'Beni', lastName: 'Keller', isSelectedFromQueue: false},
        { firstName: 'Martin', lastName: 'Durrer', isSelectedFromQueue: false}
      ];

    getQueuedJumpers(): Jumper[] {
        return this.queue;
    }
}