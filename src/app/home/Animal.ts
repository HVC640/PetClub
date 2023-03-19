export class Animal {
    name!: string | null;
    img!: string | null;
    desc!: string | null;

    constructor(name: string | null, img: string | null, desc: string | null) {
        this.name = name;
        this.img = img;
        this.desc = desc;
    }
}