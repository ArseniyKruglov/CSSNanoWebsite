import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../Main'
import { Description } from './Description/Script'
import { Name } from './Name/Script'
import * as TagsElement from './Tags/Script'



export namespace Optimization
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLLIElement
	{
		return <HTMLLIElement> BaseElement.Create
		({
			'_HTMLTag': 'LI',
			'_Children':
			[
				Name.Get(Plugin),
				Description.Get(Plugin),
				TagsElement.Get(Plugin)
			]
		})
	}
}