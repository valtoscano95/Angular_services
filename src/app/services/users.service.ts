import { Injectable } from "@angular/core";

import { ChangeStatusService } from "./changeStatus.service";

@Injectable()

export class UsersService{

    activeUsers: string[] = ['Max', 'Anna'];
    inactiveUsers: string[] = ['Chris', 'Manu'];

   constructor(private changeStatus: ChangeStatusService){}



   //change from inactive to active
   setToActive(id: number){
    this.changeStatus.changeStatus(this.inactiveUsers, this.activeUsers, id);
   }

   //change from active to inactive
   setToInactive(id:number){
    this.changeStatus.changeStatus(this.activeUsers, this.inactiveUsers, id);
   }
   
}