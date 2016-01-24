import {Pipe, PipeTransform} from "angular2/core";

@Pipe({
    name: "json"
})

export class JSONPipeFactory implements PipeTransform {
    transform(value: string, args: any[] = []): any {
        return JSON.stringify(value, null, 4);
    }
}
