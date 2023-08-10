/*let personSimple = "John Doe";

const personObject = new Object();
personObject.firstName = "John";
personObject.lastName = "Doe";
personObject.age = 50;
personObject.eyecolor = "blue";

personObject.age = 10;

console.log(personSimple);
console.log(personObject); 

const personObject = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

personObject.age = 10;

console.log(personObject);

class Pizza {
    constructor(base, sauce, toppings, cheese) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
        this.cheese = cheese;
    }

    getDescription() {
        return `A delicious pizza with ${this.base} base, ${this.sauce} sauce, ${this.toppings} toppings, and lots of ${this.cheese}.`;
    }

    getTimerBase() {
        if(this.base == 'traditional') {
            return 10;
        } else if(this.base == 'integral') {
            return 15;
        } else {
            return 'this base does not exist!';
        }
    }

    getTimerSauce() {
        if(this.sauce == 'tomato') {
            return 5;
        } else if(this.sauce == 'pezzo') {
            return 7;
        } else {
            return 'this sauce does not exist'
        }
    }

    getToppings() {
        if(this.toppings == 'pepperoni') {
            return 11;
        } else if(this.toppings == 'chicken') {
            return 20;
        }
    }

    getTimerCheese() {
        if(this.cheese == 'mozzarella') {
            return 10;
        } else if(this.cheese == 'cheedar') {
            return 5;
        } else {
            return 'this cheese does not exist1'
        }
    }
}

const myPizza = new Pizza('integral', 'tomato', 'pepperoni', 'mozzarella');
console.log(myPizza.getDescription());

let timeTotalPizza = myPizza.getTimerBase() + myPizza.getTimerSauce() + myPizza.getToppings() + myPizza.getTimerCheese();
console.log('Tempo total da pizza = ' + timeTotalPizza);

class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        return a / b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum: ", sumResult);

const subtractResult = calculator.subtract(10, 4);
console.log("subtract: ", subtractResult);

const multiplyResult = calculator.multiply(3, 4);
console.log("multiply: ", multiplyResult);

const divideResult = calculator.divide(8, 2);
console.log("divide: ", divideResult);*/

class Witch {
    constructor(name, patron, house, colorEyes) {
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName() {
        return `O nome do bruxo(a) é: ${this.name}`;
    }

    getHouse() {
        return `Ele(a) está na casa ${this.house}`;
    }

    getPatron() {
        return `Seu patrono é: ${this.patron}`;
    }
}

const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'Green');
console.log(witch1.getName());

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typeWitch) {
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if(this.typeWitch == "P") {
            return "Este bruxo é de sangue puro";
        } else if (this.typeWitch == "M") {
            return "Este bruxo é de sangue mestiço";
        } else {
            return "Este é um trouxa";
        }
    }
}

const harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'Verde', 'M');
console.log(harry.getTypeWitch());

class CamaraSecreta {
    constructor(name, pwd) {
        this.name = name;
        let _pwd = pwd;

        this.verifyPwd = (pwdInput) => {
            return pwdInput == _pwd;
        }

        this.accessChamber = () => {
            let pwdInput = prompt("Digite a senha");
            if(this.verifyPwd(pwdInput)) {
                console.log(`Bem-vindo a Camara secreta ${this.name}`);
                } else {
                console.log(`Não entra touxas na Camara secreta ${this.name}`);
             }
        };
    }

    showName() {
        console.log(`Olá ${this.name}`);
    }
}

const myAccess1 = new CamaraSecreta('Harry Potter', 'senha');

myAccess1.showName();

myAccess1.name = 'HP';

myAccess1.accessChamber();