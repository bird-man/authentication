/**
 * Created by chrissparrow on 1/11/16.
 */
import {Headers} from "angular2/http";

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
