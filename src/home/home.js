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
var common_1 = require("angular2/common");
var router_1 = require("angular2/router");
var angular2_jwt_1 = require("angular2-jwt");
var http_1 = require("angular2/http");
var headers_1 = require("../common/headers");
var JSONPipeFactory_1 = require("../common/JSONPipeFactory");
var styles = require("./home.css");
var template = require("./home.html");
var Home = (function () {
    function Home(router, http, authHttp) {
        this.router = router;
        this.http = http;
        this.authHttp = authHttp;
        this.jwt = localStorage.getItem("jwt");
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }
    Home.prototype.logout = function () {
        localStorage.removeItem("jwt");
        this.router.parent.navigateByUrl("/login");
    };
    Home.prototype.callAnonymousApi = function () {
        this._callApi("Anonymous", "http://localhost:3001/api/random-quote");
    };
    Home.prototype.callSecuredApi = function () {
        this._callApi("Secured", "http://localhost:3001/api/protected/random-quote");
    };
    Home.prototype._callApi = function (type, url) {
        var _this = this;
        this.response = null;
        if (type === "Anonymous") {
            this.http.get(url, { headers: headers_1.contentHeaders })
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
        }
        if (type === "Secured") {
            var authHeaders = headers_1.contentHeaders;
            authHeaders.append('Authorization', 'Bearer ' + this.jwt);
            console.log(typeof url);
            this.authHttp.get("http://localhost:3001/api/protected/random-quote", { headers: authHeaders })
                .subscribe(function (response) { return _this.response = response.text(); }, function (error) { return _this.response = error.text(); });
        }
    };
    Home = __decorate([
        core_1.Component({
            selector: "home"
        }),
        core_1.View({
            directives: [common_1.CORE_DIRECTIVES],
            pipes: [JSONPipeFactory_1.JSONPipeFactory],
            template: template,
            styles: [styles]
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, angular2_jwt_1.AuthHttp])
    ], Home);
    return Home;
})();
exports.Home = Home;
//# sourceMappingURL=home.js.map