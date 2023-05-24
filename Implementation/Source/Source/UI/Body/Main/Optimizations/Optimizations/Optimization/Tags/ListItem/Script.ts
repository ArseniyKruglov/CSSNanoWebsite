import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Entities from '../../../../../../../../Entities/Namespace'
import * as ListItemElement from './Chip/Script'



export function Get(Tag: Entities.Tag.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement.Create
	({
		'_HTMLTag': 'LI',
		'_Children': [ListItemElement.Get(Tag)]
	})
}