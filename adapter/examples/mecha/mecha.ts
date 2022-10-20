import { Weapon } from './weapon';

// Client
export class Mecha {

  attack(weapon: Weapon): void {
    weapon.power();
  }

}