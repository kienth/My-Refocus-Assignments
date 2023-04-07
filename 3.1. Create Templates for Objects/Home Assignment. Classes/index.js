class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    animalSpeak() {
        console.log(
            `${
                this.sound.charAt(0).toUpperCase() + this.sound.slice(1)
            }! I am a ${this.name}`
        );
    }

    notification() {
        console.log(
            `${
                this.name.charAt(0).toUpperCase() + this.name.slice(1)
            } is currently eating...`
        );
    }
}

const listAnimals = [
    { name: "cat", sound: "meow" },
    { name: "dog", sound: "arf" },
    { name: "bird", sound: "tweet" },
    { name: "tiger", sound: "rawr" },
];

listAnimals.map((item) => {
    let animal = new Animal(item.name, item.sound);
    animal.animalSpeak();
    animal.notification();
});
