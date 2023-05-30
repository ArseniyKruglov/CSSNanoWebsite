import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../Main'
import { Element_Plugin } from './Optimization/Script'



export namespace Element_ListItem
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLLIElement
	{
		return <HTMLLIElement> BaseElement.Create
		({
			'HTMLTag': 'LI',
			'Children': [Element_Plugin.Get(Plugin)]
		})
	}
}