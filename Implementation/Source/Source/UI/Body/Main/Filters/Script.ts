import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement';
import * as SortingElement from './Sorting/Script';
import * as TagsElement from './Tags/Script';



export function Get(): HTMLFormElement
{
	return <HTMLFormElement> BaseElement
	({
		'HTMLTag': 'Div',
		'Children':
		[
			SortingElement.Get(),
			TagsElement.Get()
		]
	})
}