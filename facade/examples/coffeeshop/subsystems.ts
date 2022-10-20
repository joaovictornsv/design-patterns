/**
 * Subsystems of Facade
 */

export class Deposit {
  getCoffee() {
    console.log('> Getting coffe in deposit... 🔍')
  }
}

export class CoffeeMachine {
  on() {
    console.log('> Coffee Machine is on 🔥');
  }
  prepare(intensity: number) {
    console.log(`> Coffee with intensity ${intensity} ready! ✅`);
  }
}

export class Delivery {
  sendDelivery() {
    console.log('> Delivery sended 📦');
  }
}