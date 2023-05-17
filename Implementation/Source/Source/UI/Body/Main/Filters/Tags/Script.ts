import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Model from '../../../../../Model/Namespace'
import * as TagElement from './Tag/Style'



export function Get(): HTMLUListElement
{
	return <HTMLUListElement> BaseElement
	({
		'HTMLTag': 'UL',
		'Children': Model.Data.Tags.List.map((Tab) => TagElement.Get(Tab))
	})
}