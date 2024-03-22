import { Example } from "./Example";

export class ExampleResponse {

    private examples: Example[] = [];

    public getExamples(): Example[] {
        return this.examples;
    }

    public setExamples(examples: Example[]): void {
        this.examples = examples;
    }

    public withExamples(examples: Example[]): ExampleResponse {
        this.setExamples(examples);
        return this;
    }
}