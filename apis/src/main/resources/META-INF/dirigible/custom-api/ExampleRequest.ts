export class ExampleRequest {

    // @ts-ignore
    private exampleId: string;

    // @ts-ignore
    private exampleName: string;

    public getExampleId(): string {
        return this.exampleId;
    }

    public setExampleId(exampleId: string): void {
        this.exampleId = exampleId;
    }

    public getExampleName(): string {
        return this.exampleName;
    }

    public setExampleName(exampleName: string): void {
        this.exampleName = exampleName;
    }

    public withExampleId(exampleId: string): ExampleRequest {
        this.setExampleId(exampleId);
        return this;
    }

    public withExampleName(exampleName: string): ExampleRequest {
        this.setExampleName(exampleName);
        return this;
    }
}