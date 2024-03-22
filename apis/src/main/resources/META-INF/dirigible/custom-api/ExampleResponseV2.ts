export interface SubExampleV2 {
    readonly date: Date;
}

export interface ExampleV2 {
    readonly id: string;
    readonly name: string;
    readonly subexamples: SubExampleV2[];
}

export interface ExampleResponseV2 {
    readonly examples: ExampleV2[];
}