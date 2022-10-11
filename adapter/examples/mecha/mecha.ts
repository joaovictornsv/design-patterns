import { Weapon } from './weapon';

export class Mecha {

  attack(weapon: Weapon): void {
    weapon.power();
  }

}