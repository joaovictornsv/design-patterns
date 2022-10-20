// Target
export interface Weapon {
  power(): void;
}

/**
 * Sword Class and Adapter
 */
export class Sword {
  slash(): void {
    console.log('The Sword slashed')
  }
}

export class SwordAdapter extends Sword implements Weapon {
  private readonly sword: Sword;


  constructor(sword: Sword) {
    super();
    this.sword = sword;
  }


  power(): void {
    this.sword.slash()
  }
}


/**
 * MachineGun Class and Adapter
 */
export class MachineGun {
  fire(): void {
    console.log('The Machine Gun fired')
  }
}

export class MachineGunAdapter extends MachineGun implements Weapon {
  private readonly machineGun: MachineGun;


  constructor(machineGun: MachineGun) {
    super();
    this.machineGun = machineGun;
  }

  power(): void {
    this.fire()
  }
}

/**
 * MachineGun Class and Adapter
 */
export class Fireball {
  burn(): void {
    console.log('The Fireball burned')
  }
}

export class FireballAdapter extends Fireball implements Weapon {
  private readonly fireball: Fireball;


  constructor(fireball: Fireball) {
    super();
    this.fireball = fireball;
  }

  power(): void {
    this.burn()
  }
}