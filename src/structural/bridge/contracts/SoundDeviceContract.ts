import { DeviceContract } from './DeviceContract';

export interface SoundDeviceContract extends DeviceContract {
	getVolume(): number;
	setVolume(volume: number): void;
}
