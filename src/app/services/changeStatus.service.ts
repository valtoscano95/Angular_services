import { Injectable } from "@angular/core";
import { CounterService } from "./counter.service";

@Injectable()
export class ChangeStatusService{

    constructor(private counterService: CounterService){};
    //change from active to inactive
    changeStatus(arrayOrigin:string[], arrayTarget:string[], id: number) {
        arrayTarget.push(arrayOrigin[id]);
        arrayOrigin.splice(id, 1);
        this.counterService.onChangeStatus();
    }
}