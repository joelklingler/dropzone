import { Jumper } from "../models/Jumper";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from "rxjs";

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

    getJumpers(): Jumper[] {
        return this.queue;
    }
}