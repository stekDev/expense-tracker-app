import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn:'root' })
export class SpinnerService {
    public active: boolean = false;
    private stack: number = 0;
    private trigger: Subject<boolean>;
    private triggerObs: Observable<boolean>;

    constructor() {
        this.trigger = new Subject<boolean>();
        this.triggerObs = this.trigger.asObservable();
    }

    public obs(): Observable<boolean> {
        return this.triggerObs;
    }

    public show() {
        this.stack++;
        this.active = true;
        this.next(true);
    }

    public hide() {
        this.stack--;
        if(this.stack <= 0){
            this.stack = 0;
            this.active = false;
            this.next(false);
        }
    }

    public state(){
        return this.active;
    }

    private next(state: boolean): void {
        this.trigger.next(state);
    }
}
