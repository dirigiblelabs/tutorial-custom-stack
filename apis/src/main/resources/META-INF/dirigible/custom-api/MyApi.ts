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