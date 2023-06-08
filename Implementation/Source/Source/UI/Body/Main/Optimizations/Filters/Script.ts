import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Sorting } from './Sorting/Script'



export namespace Element_Filters
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Form',
			'Children': [Element_Sorting.Get()]
		})
	}
}