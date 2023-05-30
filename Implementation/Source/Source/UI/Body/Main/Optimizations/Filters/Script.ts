import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as SortingElement from './Sorting/Script'



export namespace Element_Filters
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Children': [SortingElement.Get()]
		})
	}
}