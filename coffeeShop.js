import Coffee from "./coffeeClass.js"
// class Coffee {
//     constructor(coffeeType, coffeeAmount, waterType, waterAmount, milkType, milkAmount, topping1, topping2, basePrice) {
//         this.coffeeType = coffeeType ?? "arabica";
//         this.coffeeAmount = coffeeAmount ?? 10;
//         this.waterType = waterType ?? "pure water";
//         this.waterAmount = waterAmount ?? 60;
//         this.milkType = milkType;
//         this.milkAmount = milkAmount ?? 60;
//         this.topping1 = topping1 ?? "sugar";
//         this.topping2 = topping2 ?? "cinnamon";
//         this.basePrice = basePrice;
//     }
//     createStep1() { return `1. Put ${this.coffeeAmount} gr of ${this.coffeeType} into a coffee maker carob.` };
//     createStep2() { return `2. Put ${this.waterAmount} ml of ${this.waterType} into a coffee maker water container.` };
//     createStep3() { return `3. Take ${this.milkAmount} ml of ${this.milkType}, whip it to foam.` };
//     createStep4() { return `4. Make an espresso using a coffee maker.` };
//     createStep5() { return `5. Pour the milk foam into espresso.` };
//     createStep6() { return `6. Add ${this.topping1} and ${this.topping2}.` };

// }

function makeCoffee(name, size) {
    let coffeeOrder = new Coffee;
    let sizeIndex;
    if (size === "small") {
        sizeIndex = 1
    }
    else if (size === "medium") {
        sizeIndex = 1.5
    } else if (size === "large") {
        sizeIndex = 2;
    } else return document.write("The size is not valid");

    coffeeOrder.coffeeName = name;

    if (coffeeNameOrder === "latte classic") {
        coffeeOrder.milkType = "cow milk";
        coffeeOrder.basePrice = 5;
    } else if (coffeeNameOrder === "latte vegan") {
        coffeeOrder.milkType = "almond milk";
        coffeeOrder.basePrice = 7;
    } else return document.write("<br>", "We have no coffee of that type");

    let totalPrice = coffeeOrder.basePrice * sizeIndex;
    coffeeOrder.coffeeAmount *= sizeIndex;
    coffeeOrder.waterAmount *= sizeIndex;
    coffeeOrder.milkAmount *= sizeIndex;

    console.log(coffeeOrder);

    let recipeSteps = [coffeeOrder.createStep1(), coffeeOrder.createStep2(), coffeeOrder.createStep3(), coffeeOrder.createStep4(), coffeeOrder.createStep5(), coffeeOrder.createStep6()];
    document.write("<br>", "<br>" + `Making the ${coffeeOrder.coffeeName}:` + "<br>");

    for (let i = 0; i < recipeSteps.length; i++) {
        document.write("<br>" + recipeSteps[i]);
    }

    document.write("<br>", "<br>" + `The price for ${glassSize} ${coffeeOrder.coffeeName} will be USD ${totalPrice}`);
    //console.table(recipeSteps);
    //console.log(coffeeAmount, waterAmount, milkAmount, totalPrice)
}

alert("Welcome to our coffee service!");

let coffeeNameOrder = prompt("Choose coffee type: Latte vegan or Latte classic", "Latte classic").toLowerCase();
let glassSize = prompt("Choose glass size: small, medium or large", "medium").toLowerCase();
makeCoffee(coffeeNameOrder, glassSize);

