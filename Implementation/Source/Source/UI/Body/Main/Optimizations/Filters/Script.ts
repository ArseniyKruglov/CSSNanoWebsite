import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as SortingElement from './Sorting/Script'



export namespace Filters
{
	export function Get(): HTMLFormElement
	{
		return <HTMLFormElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_Children': [SortingElement.Get()]
		})
	}
}