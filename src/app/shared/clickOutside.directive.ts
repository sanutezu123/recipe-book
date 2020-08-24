import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
})
export class ClickOutSideDirective {
    constructor(private _elemRef: ElementRef) {}
    @Output() clickOutSide = new EventEmitter();
    @HostListener('document:click',['$event.target'])
    public onClick(targetElement) {
        const clickInside = this._elemRef.nativeElement.contains(targetElement);
        if(!clickInside){
            console.log('out')
            this.clickOutSide.emit(null);
        }
    }
}