import { Mecha } from './mecha';
import { Fireball, FireballAdapter, MachineGun, MachineGunAdapter, Sword, SwordAdapter } from './weapon';

const mecha = new Mecha()

const sword = new Sword()
const swordAdapter = new SwordAdapter(sword)

const machineGun = new MachineGun()
const machineGunAdapter = new MachineGunAdapter(machineGun)

const fireball = new Fireball()
const fireballAdapter = new FireballAdapter(fireball)

mecha.attack(swordAdapter)
mecha.attack(machineGunAdapter)
mecha.attack(fireballAdapter)