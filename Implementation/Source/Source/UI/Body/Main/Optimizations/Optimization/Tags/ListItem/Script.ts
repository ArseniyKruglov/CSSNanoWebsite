import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Tag from '../../../../../../../Model/Entities/Tag'
import * as ListItemElement from './Chip/Script'



export function Get(Tag: Tag.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement
	({
		'HTMLTag': 'LI',
		'Children': [ListItemElement.Get(Tag)]
	})
}