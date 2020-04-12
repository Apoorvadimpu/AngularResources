import { OnInit, ElementRef, Directive } from "@angular/core";


@Directive({
    selector:'[app-basicdirective]'
})
export class BasicDirector implements OnInit{
    constructor(private element:ElementRef){}
    
   ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'green';
    }

}