import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../../Main'
import * as ListItemElement from './ListItem/Script'



export function Get(Plugin: Entities.Plugin.Interface): HTMLUListElement
{
	return <HTMLUListElement> BaseElement.Create
	({
		'_HTMLTag': 'UL',
		'_Children': Plugin.Tags.map((Tag) => ListItemElement.Get(Tag))
	})
}