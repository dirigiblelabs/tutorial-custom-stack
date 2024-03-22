import { ExampleResponseV2 } from "./ExampleResponseV2";
import { ExampleRequestV2 } from "./ExampleRequestV2";

const ExampleClientV2Class = Java.type("io.dirigible.samples.api.client.ExampleClientV2");

export class ExampleClientV2 {

    public doExample(request: ExampleRequestV2): ExampleResponseV2 {
        const response = new ExampleClientV2Class().doExample(JSON.stringify(request));
        return JSON.parse(response);
    }
}