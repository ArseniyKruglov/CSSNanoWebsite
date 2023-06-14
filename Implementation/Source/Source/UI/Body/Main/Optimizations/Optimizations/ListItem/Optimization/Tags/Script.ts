import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../../../Main'
import { ListItem } from './ListItem/Script'



export namespace Tags
{
	export function Get(Tags: Entities.Tag.Interface[]): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': Tags.map((Tag) => ListItem.Get(Tag))
		})
	}
}