import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from "@angular/core";


@Directive({
    selector:'[appNoDirectDomAccess]'
})

export class NoDirectDomAccess implements OnInit{

    @Input() defaultColor:string = 'transparent';
    @Input() hightlightcolor:string = 'yellow';
@HostBinding('style.backgroundColor') backgroundColor:string= this.defaultColor;
constructor(private elementref:ElementRef, private renderer:Renderer2){}
  
@HostListener('mouseover') onmouseover(incomingdata: Event){
    // this.renderer.setStyle(this.elementref.nativeElement,'backgroundColor','blue'); 
    //this works same as above but line but background last be event bound and can be accessed directly
    this.backgroundColor=this.hightlightcolor;
    }
    @HostListener('mouseleave') onmouseleave(incomingdata: Event){
        // this.renderer.setStyle(this.elementref.nativeElement,'backgroundColor','transparent');
        this.backgroundColor=this.defaultColor;
    }
  

ngOnInit(){
 this.backgroundColor=this.defaultColor;
    //using normal renderer styles and elementref for styling
   //this.renderer.setStyle(this.elementref.nativeElement,'backgroundColor','pink');
}


}