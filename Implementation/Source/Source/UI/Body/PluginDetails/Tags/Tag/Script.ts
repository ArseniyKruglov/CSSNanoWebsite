import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../Main'
import { Element_Description } from './Description/Style'



export namespace Element_Tag
{
	export function Get(Tag: Entities.Tag.Tag.Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Children': [Element_Description.Get(Tag.Description)]
		})
	}
}