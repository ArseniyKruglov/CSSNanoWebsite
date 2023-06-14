import { BaseElement } from '../../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../../../../Main'
import { Element_Chip } from './Chip/Script'



export namespace ListItem
{
	export function Get(Tag: Entities.Tag.Interface): HTMLLIElement
	{
		return <HTMLLIElement> BaseElement.Create
		({
			'HTMLTag': 'LI',
			'Children': [Element_Chip.Get(Tag)]
		})
	}
}