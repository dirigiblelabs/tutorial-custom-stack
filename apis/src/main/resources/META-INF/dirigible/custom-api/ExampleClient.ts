import { ExampleResponse } from "./ExampleResponse";
import { ExampleRequest } from "./ExampleRequest";
import { Example } from "./Example";
import { SubExample } from "./SubExample";

const ExampleClientClass = Java.type("io.dirigible.samples.api.client.ExampleClient");
const ExampleRequestClass = Java.type("io.dirigible.samples.api.domain.input.ExampleRequest");

export class ExampleClient {

    public doExample(request: ExampleRequest): ExampleResponse {
        const requestObj = new ExampleRequestClass();
        requestObj.setExampleId(request.getExampleId());
        requestObj.setExampleName(request.getExampleName());

        const responseObj = new ExampleClientClass().doExample(requestObj);

        const examples: Example[] = [];

        for (const exampleObj of responseObj.getExamples()) {
            const example = new Example();
            const subExamples: SubExample[] = [];

            example.setId(exampleObj.getId());
            example.setName(exampleObj.getName());

            for (const subexampleObj of exampleObj.getSubexamples()) {
                const subexample = new SubExample();
                subexample.setDate(subexampleObj.getDate());
                subExamples.push(subexample);
            }
            example.setSubexamples(subExamples)

            examples.push(example);
        }

        const response = new ExampleResponse();
        response.setExamples(examples);
        return response;
    }
}