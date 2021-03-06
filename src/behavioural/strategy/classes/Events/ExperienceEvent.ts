import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';

export class ExperienceEvent {
	protected _experienceBonus: number;

	constructor() {
		this._experienceBonus = 0;
	}

	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const diffLevel = monster.getLevel() - player.level;
		const mobExperience = monster.getAmountExperience();

		this._experienceBonus = Math.floor(diffLevel / 5) * 0.1;

		return mobExperience + mobExperience * this._experienceBonus;
	}
}
