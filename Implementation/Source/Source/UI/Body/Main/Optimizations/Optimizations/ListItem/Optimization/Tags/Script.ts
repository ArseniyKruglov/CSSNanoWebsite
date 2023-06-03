import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../../../Main'
import { ListItem } from './ListItem/Script'



export namespace Tags
{
	export interface Interface
	{
		'Tags': Entities.Tag.Tag.Interface[]
	}



	export function Get(Argument: Interface): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': Argument.Tags.map((Tag) => ListItem.Get(Tag))
		})
	}
}