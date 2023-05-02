export default class Coffee {
    constructor(coffeeType, coffeeAmount, waterType, waterAmount, milkType, milkAmount, topping1, topping2, basePrice) {
        this.coffeeType = coffeeType ?? "arabica";
        this.coffeeAmount = coffeeAmount ?? 10;
        this.waterType = waterType ?? "pure water";
        this.waterAmount = waterAmount ?? 60;
        this.milkType = milkType;
        this.milkAmount = milkAmount ?? 60;
        this.topping1 = topping1 ?? "sugar";
        this.topping2 = topping2 ?? "cinnamon";
        this.basePrice = basePrice;
    }
    createStep1() { return `1. Put ${this.coffeeAmount} gr of ${this.coffeeType} into a coffee maker carob.` };
    createStep2() { return `2. Put ${this.waterAmount} ml of ${this.waterType} into a coffee maker water container.` };
    createStep3() { return `3. Take ${this.milkAmount} ml of ${this.milkType}, whip it to foam.` };
    createStep4() { return `4. Make an espresso using a coffee maker.` };
    createStep5() { return `5. Pour the milk foam into espresso.` };
    createStep6() { return `6. Add ${this.topping1} and ${this.topping2}.` };

}
