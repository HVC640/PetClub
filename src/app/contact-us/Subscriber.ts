export class Subcriber {    //class of Subscriber.
    name!: string | null;
    email!: string | null;
    pet!: string | null;
    location!: string | null;

    constructor(name: string | null, email: string | null, pet: string | null, location: string | null) {
        this.name = name;
        this.email = email;
        this.pet = pet;
        this.location = location;
    }
}