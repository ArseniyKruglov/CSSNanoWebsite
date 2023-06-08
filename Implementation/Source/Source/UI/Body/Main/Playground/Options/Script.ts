import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_PresetSelector } from './Preset/Script'



export namespace Element_Options
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Classes': ['Options'],
			'Children': [Element_PresetSelector.Get()]
		})
	}
}