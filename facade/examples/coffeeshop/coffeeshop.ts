import { CoffeeMachine, Delivery, Deposit } from './subsystems';

// Facade
export class CoffeeShop {
  orderCoffee(intensity: number) {
    const deposit = new Deposit();
    const coffeeMachine = new CoffeeMachine()
    const delivery = new Delivery()

    deposit.getCoffee()
    coffeeMachine.on()
    coffeeMachine.prepare(intensity)
    delivery.sendDelivery()
  }
}