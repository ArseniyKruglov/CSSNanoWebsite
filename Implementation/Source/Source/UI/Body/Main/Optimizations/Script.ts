import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Filters } from './Filters/Script'
import { Optimizations as OptimizationsChild } from './Optimizations/Script'



export namespace Optimizations
{
	export function Get(): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_ClassNames': ['Optimizations'],
			'_Children':
			[
				Filters.Get(),
				OptimizationsChild.Get()
			]
		})
	}
}