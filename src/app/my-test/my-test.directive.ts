import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: "[myTestDirective]"
})

export class MyTestDirective {
    
    @Input() set myTestDirective(condition: boolean) {
        console.log(condition);
        if (condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
        } else {
            this.vcRef.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

    }
}