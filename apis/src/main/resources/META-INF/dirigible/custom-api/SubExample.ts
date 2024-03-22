export class SubExample {

    // @ts-ignore
    private date: Date;

    public getDate(): Date {
        return this.date;
    }

    public setDate(date: Date): void {
        this.date = date;
    }

    public withDate(date: Date): SubExample {
        this.setDate(date);
        return this;
    }
}