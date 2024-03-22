# Custom Stack - Sample

The custom stack sample contains all the available standard Eclipse Dirigible components.

It is good for exploration about the different features and their applicability in particular scenarios.


#### Docker

```
docker pull ghcr.io/dirigiblelabs/custom-stack:latest
docker run --name custom-stack --rm -p 8080:8080 ghcr.io/dirigiblelabs/custom-stack:latest
```

- For Apple's M1: provide `--platform=linux/arm64` for better performance		

#### Build

```
mvn clean install
```
	
#### Run

```
java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED -jar application/target/custom-stack-application-*.jar
```

#### Debug

```
java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000 -jar application/target/custom-stack-application-*.jar
```
	
#### Web

```
http://localhost:8080
```

#### REST API

```
http://localhost:8080/swagger-ui/index.html
```

## Demo Application

The [demo-application](demo-application) folder contains a simple applications, that consumes the custom APIs _(`custom-api/MyApi` and `custom-api/ExampleClient`)_ . The `custom-api/MyApi` is a TypeScript API, that exposes the `io.dirigible.samples.MyFacade` Java class. The Java class has both `static` and `instance` methods. The `custom-api/ExampleClient` contains more sophisticated usage of multiple Java classes.

### Basic Example

**demo-application/demo.ts**
```ts
import { response } from "sdk/http";
import { MyApi } from "custom-api/MyApi";

const myApiInstance = new MyApi();

const firstNumber = myApiInstance.add(5, 3);
const secondNumber = myApiInstance.multiply(5, 3);
const customMethod = myApiInstance.customMethod("sample-custom-stack");
const greetingMessage = MyApi.greet();

const data = {
    firstNumber: firstNumber,
    secondNumber: secondNumber,
    customMethod: customMethod,
    greetingMessage: greetingMessage,
};

response.println(JSON.stringify(data, null, 2));
```

**custom-api/MyApi**
```ts
const MyFacade = Java.type("io.dirigible.samples.MyFacade");

export class MyApi {

    private facadeInstance = new MyFacade();

    public static greet(): string {
        return MyFacade.greet();
    }

    public add(a: number, b: number): number {
        return this.facadeInstance.add(a, b);
    }

    public multiply(a: number, b: number): number {
        return this.facadeInstance.multiply(a, b);
    }

    public customMethod(input: string): string {
        return this.facadeInstance.customMethod(input);
    }
}
```

### Advanced

**demo-application/demo-client.ts**
```ts
import { response } from "sdk/http";
import { ExampleClient } from "custom-api/ExampleClient";
import { ExampleRequest } from "custom-api/ExampleRequest";

const exampleRequest = new ExampleRequest();
exampleRequest.setExampleId('example-id-1234');
exampleRequest.setExampleName('Custom Stack Example');

const exampleClient = new ExampleClient();
const exampleResponse = exampleClient.doExample(exampleRequest);

response.println(JSON.stringify(exampleResponse, null, 2));
```

**custom-api/ExampleClient**

```ts
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
```