import { response } from "sdk/http";
import { ExampleClientV2 } from "custom-api/ExampleClientV2";
import { ExampleRequestV2 } from "custom-api/ExampleRequestV2";

const exampleRequest: ExampleRequestV2 = {
    exampleId: 'example-id-1234',
    exampleName: 'Custom Stack Example'
};

const exampleClient = new ExampleClientV2();
const exampleResponse = exampleClient.doExample(exampleRequest);

response.println(JSON.stringify(exampleResponse, null, 2));