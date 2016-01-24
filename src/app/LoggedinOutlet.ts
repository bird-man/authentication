import {Directive, ElementRef, DynamicComponentLoader, Attribute} from "angular2/core";
import {RouterOutlet, Router, ComponentInstruction} from "angular2/router";

@Directive({
    selector: "router-outlet"
})

export class LoggedInRouterOutlet extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader, _parentRouter: Router, @Attribute("name") nameAttr: string) {
        super(_elementRef, _loader, _parentRouter, nameAttr);

        this.parentRouter = _parentRouter;
        this.publicRoutes = {
            "/login": true,
            "/signup": true
        };
    }

    activate(instruction: ComponentInstruction) {
        var url = this.parentRouter.lastNavigationAttempt;
        console.log(url);
        if (!this.publicRoutes[url] && !localStorage.getItem("jwt")) {
            this.parentRouter.navigateByUrl("/login");
        }

        return super.activate(instruction);
    }
}
