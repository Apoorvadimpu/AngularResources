import { Directive,Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUseunless]'
})
export class UseunlessDirective {

  @Input() set appUseunless(condition:boolean){
     if(!condition){
        this.viewcont.createEmbeddedView(this.template);
     }else{
             this.viewcont.clear();
     }
  }
  constructor(private template:TemplateRef<any>,private viewcont:ViewContainerRef) { }

}
