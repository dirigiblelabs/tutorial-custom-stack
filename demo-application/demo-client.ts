import { response } from "sdk/http";
import { ExampleClient } from "custom-api/ExampleClient";
import { ExampleRequest } from "custom-api/ExampleRequest";

const exampleRequest = new ExampleRequest();
exampleRequest.setExampleId('example-id-1234');
exampleRequest.setExampleName('Custom Stack Example');

const exampleClient = new ExampleClient();
const exampleResponse = exampleClient.doExample(exampleRequest);

response.println(JSON.stringify(exampleResponse, null, 2));