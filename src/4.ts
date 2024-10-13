// Клас Key
class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random(); // Генеруємо випадковий підпис
    }

    getSignature(): number {
        return this.signature; // Повертаємо підпис
    }
}

// Клас Person
class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey(): Key {
        return this.key; // Повертаємо збережений ключ
    }
}

// Абстрактний клас House
abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person): void {
        if (this.door) {
            this.tenants.push(person);
            console.log(`${person.constructor.name} увійшов до будинку.`);
        } else {
            console.log("Двері зачинені. Ви не можете увійти.");
        }
    }

    abstract openDoor(key: Key): void;
}

// Клас MyHouse, що успадковується від House
class MyHouse extends House {
    openDoor(key: Key): void {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Двері відчинено.");
        } else {
            console.log("Ключ не підходить.");
        }
    }
}

// Тестування
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey()); // Відчиняємо двері
house.comeIn(person); // Людина входить у будинок

export {};
