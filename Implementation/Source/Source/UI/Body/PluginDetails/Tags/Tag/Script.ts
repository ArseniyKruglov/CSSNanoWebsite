import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../Main'
import { Element_Description } from './Description/Script'
import { Element_Tag as ChildrenElement_Tag } from './Tag/Script'



export namespace Element_Tag
{
	export function Get(Tag: Entities.Tag.Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Children':
			[
				ChildrenElement_Tag.Get(Tag),
				Element_Description.Get(Tag)
			]
		})
	}
}