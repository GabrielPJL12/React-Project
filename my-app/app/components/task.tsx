export default class Task {
    name: string;
    id: number;
    complete: boolean = false;

    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.complete = false;
    }
}