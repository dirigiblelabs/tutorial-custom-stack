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