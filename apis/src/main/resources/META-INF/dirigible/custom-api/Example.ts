import { SubExample } from "./SubExample";

export class Example {

    // @ts-ignore
    private id: string;

    // @ts-ignore
    private name: string;

    // @ts-ignore
    private subexamples: SubExample[] = [];

    public getId(): string {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getSubexamples(): SubExample[] {
        return this.subexamples;
    }

    public setId(id: string): void {
        this.id = id;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setSubexamples(subexamples: SubExample[]): void {
        this.subexamples = subexamples;
    }

    public withId(id: string): Example {
        this.setId(id);
        return this;
    }

    public withName(name: string): Example {
        this.setName(name);
        return this;
    }

    public withSubexamples(subexamples: SubExample[]): Example {
        this.setSubexamples(subexamples);
        return this;
    }
}