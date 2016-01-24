/**
 * Created by chrissparrow on 1/11/16.
 */
import {Component, View} from "angular2/core";
import {CORE_DIRECTIVES} from "angular2/common";
import {Router} from "angular2/router";
import {AuthHttp} from "angular2-jwt";
import {Http} from "angular2/http";
import {contentHeaders} from "../common/headers";
import {JSONPipeFactory} from "../common/JSONPipeFactory"

let styles = require("./home.css");
let template = require("./home.html");

@Component({
    selector: "home"
})
@View({
    directives: [CORE_DIRECTIVES],
    pipes: [JSONPipeFactory],
    template: template,
    styles: [styles]
})

export class Home {
    jwt: string;
    decodedJwt: string;
    response: string;
    api: string;

    constructor(public router: Router, public http: Http, public authHttp: AuthHttp) {
        this.jwt = localStorage.getItem("jwt");
        this.decodedJwt = this.jwt && window.jwt_decode(this.jwt);
    }

    logout() {
        localStorage.removeItem("jwt");
        this.router.parent.navigateByUrl("/login");
    }

    callAnonymousApi() {
        this._callApi("Anonymous", "http://localhost:3001/api/random-quote");
    }

    callSecuredApi() {
        this._callApi("Secured", "http://localhost:3001/api/protected/random-quote");
    }

    _callApi(type: string, url: string) {
        this.response = null;
        if (type === "Anonymous") {
            // For non-protected routes, just use http
            this.http.get(url, {headers: contentHeaders})
                .subscribe(
                    response => this.response = response.text(),
                    error => this.response = error.text()
                );
        }

        if (type === "Secured") {
            var authHeaders = contentHeaders;
            authHeaders.append('Authorization', 'Bearer ' + this.jwt);
            console.log(typeof url);
            this.authHttp.get("http://localhost:3001/api/protected/random-quote", {headers: authHeaders})
                .subscribe(
                    response => this.response = response.text(),
                    error => this.response = error.text()
                );
        }

    }

}


