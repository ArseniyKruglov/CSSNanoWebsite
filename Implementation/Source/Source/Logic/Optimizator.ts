import { Preset as PresetData } from '../Data/Preset'



export namespace Optimizator
{
	export function Process(UnoptimizedCSS: string, Preset: PresetData.Enum): string
	{
		return `${PresetData.List[Preset]} preset: ${UnoptimizedCSS}`
	}
}