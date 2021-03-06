var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var router_1 = require("angular2/router");
var LoggedinOutlet_1 = require("./LoggedinOutlet");
var home_1 = require("../home/home");
var login_1 = require("../login/login");
var signup_1 = require("../signup/signup");
var template = require("./app.html");
var App = (function () {
    function App(router) {
        this.router = router;
        console.log("In App Constructor");
    }
    App = __decorate([
        core_1.Component({
            selector: "auth-app"
        }),
        core_1.View({
            template: template,
            directives: [LoggedinOutlet_1.LoggedInRouterOutlet]
        }),
        router_1.RouteConfig([
            { path: "/", redirectTo: ["/Home"] },
            { path: "/home", component: home_1.Home, as: "Home" },
            { path: "/login", component: login_1.Login, as: "Login" },
            { path: "/signup", component: signup_1.Signup, as: "Signup" }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.js.map