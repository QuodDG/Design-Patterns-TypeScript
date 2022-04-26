import { CharacterFactoryContract } from '../../contracts/CharacterFactoryContract';
import { Coat } from '../armors/Coat';
import { Mage } from '../characters/Mage';
import { Rod } from '../weapons/Rod';

export class MageFactory implements CharacterFactoryContract {
	public createCharacter(): Mage {
		return new Mage(15, 10, 5);
	}

	public createWeapon(): Rod {
		return new Rod();
	}

	public createArmor(): Coat {
		return new Coat();
	}
}
