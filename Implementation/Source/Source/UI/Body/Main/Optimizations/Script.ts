import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Filters } from './Filters/Script'
import { Plugins as OptimizationsChild } from './Optimizations/Script'



export namespace Element_Plugins
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Classes': ['Optimizations'],
			'Children':
			[
				Element_Filters.Get(),
				OptimizationsChild.Get()
			]
		})
	}
}