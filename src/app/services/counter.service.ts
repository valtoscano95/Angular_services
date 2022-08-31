import { Injectable } from "@angular/core";

export class CounterService{
    
    counter: number = 0;
    
    onChangeStatus(){
        this.counter++;
    }
   
}