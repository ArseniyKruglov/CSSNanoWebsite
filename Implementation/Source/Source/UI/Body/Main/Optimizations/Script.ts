import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as FiltersElement from './Filters/Script'
import * as OptimizationsElement from './Optimizations/Script'



export function Get(): HTMLElement
{
	return <HTMLElement> BaseElement.Create
	({
		'_HTMLTag': 'Div',
		'_ClassNames': ['Optimizations'],
		'_Children':
		[
			FiltersElement.Get(),
			OptimizationsElement.Get()
		]
	})
}