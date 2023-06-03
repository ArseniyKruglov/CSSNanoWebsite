import { BaseElement } from '../../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Entities from '../../../../../../../../../Entities/Namespace'
import { Chip } from './Chip/Script'



export namespace ListItem
{
	export function Get(Tag: Entities.Tag.Tag.Interface): HTMLLIElement
	{
		return <HTMLLIElement> BaseElement.Create
		({
			'HTMLTag': 'LI',
			'Children': [Chip.Get(Tag)]
		})
	}
}