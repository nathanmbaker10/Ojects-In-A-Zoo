function run() {
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    // tigger.eat("meat");
    // pooh.eat("fish");
    // pooh.eat("meat");
    // rarity.eat("marshmallows");
    // rarity.sleep();
    // gemma.eat("meat");
    // gemma.eat("leaves");
    // gemma.sleep();
    // stinger.eat("ice cream");
    // stinger.eat("pollen");
    // stinger.sleep();
    var animals = [tigger, pooh, rarity, gemma, stinger];
    var zoe = new Zookeeper("Zoebot");
    zoe.feedAnimals(animals, "meat");
    console.log(Animal.getPopulation());
}

var animalPopulation = 0;

class Animal {
    // Put your instance variables here
    constructor(name,favoriteFood) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
    }

    sleep() {
        console.log(this.name + " sleeps for 8 hours.");

    }

    eat(food) {
        // complete your eat function here!
        console.log(this.name + " eats " + food);
        food == this.favoriteFood ? console.log("YUM!!! " +     this.name + " wants more " + food): this.sleep(this.name);
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal{
    constructor(name) {
        // put your constructor content here
        super(name, "meat");
    }
}

class Bear extends Animal{
    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        console.log(this.name + " hibernates for 4 months.");
    }
}

class Bee extends Animal {
    constructor(name) {
        super(name, "pollen");
    }

    sleep () {
        console.log(this.name + " never sleeps.");
    }

    eat(food) {
        if (food == "pollen") {
            super.eat("pollen");
        } else {
            console.log("Yuck!!! " + this.name  + " will not eat " + food);
        }
    }


}

class Giraffe extends Animal {
    constructor(name) {
        super(name, "leaves");
    }

    eat(food) {
        if(food == this.favoriteFood) {
            super.eat('leaves');
        } else {
            console.log("Yuck!!! " + this.name  + " will not eat " + food);
        }
    }
}

class Unicorn extends Animal {
    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        console.log(this.name + " sleeps in a cloud.");
    }

}


class Zookeeper {
    constructor(name) {
        this.name = name;
    }

    feedAnimals(animals, food) {
        console.log(this.name + " is feeding " + food + " to " + animals.length + " of " + Animal.getPopulation() + " animals.");
        for (var animal of animals) {
            animal.eat(food);
        }
    }


}


