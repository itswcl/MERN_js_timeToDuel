class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res -= this.power;
    }
}

class Effect extends Card {
    constructor(name, cost, stat, amount) {
        super(name, cost);
        this.stat = stat;
        this.amount = amount;
    }

    play(target) {
        if (target instanceof Unit) {
            this.stat === 'res'
                ? target.res += this.amount
                : target.power += this.amount;
        } else {
            throw new Error("Target must be Unit!");
        }
    }
}



const redBeltNinja = new Unit('Red Belt Ninja', 3, 3, 4);
console.log(redBeltNinja);
const hardAlgo = new Effect('Hard Algorithm', 2, 'res', 3);

const blackBeltNinja = new Unit('Black Belt Ninja', 4, 5, 4);
console.log(blackBeltNinja);
const unhandledPromiseRejection = new Effect('Unhandled Promise Rejection', 1, 'res', -2);
unhandledPromiseRejection.play(redBeltNinja);

const pairProgramming = new Effect('Pair Programming', 3, 'power', 2);
pairProgramming.play(redBeltNinja)

redBeltNinja.attack(blackBeltNinja);

console.log(redBeltNinja);
console.log(blackBeltNinja);