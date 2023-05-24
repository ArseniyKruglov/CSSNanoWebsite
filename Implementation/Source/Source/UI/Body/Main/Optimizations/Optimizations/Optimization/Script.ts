import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../Main'
import * as DescriptionElement from './Description/Script'
import * as TagsElement from './Tags/Script'



export function Get(Plugin: Entities.Plugin.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement.Create
	({
		'_HTMLTag': 'LI',
		'_Children':
		[
			DescriptionElement.Get(Plugin),
			TagsElement.Get(Plugin)
		]
	})
}