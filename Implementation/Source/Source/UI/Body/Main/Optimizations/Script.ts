import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../Main'
import { Element_Filters } from './Filters/Script'
import { Element_Plugins as ChildElement_Plugins } from './Optimizations/Script'



export namespace Element_Plugins
{
	export function Get(PluginsList: Entities.Plugin.Interface[]): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Classes': ['Optimizations'],
			'Children':
			[
				Element_Filters.Get(),
				ChildElement_Plugins.Get(PluginsList, ChildElement_Plugins.SortingType.SortingTypes.Safety)
			]
		})
	}
}