import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Features } from './Features/Script'
import { FirstSection } from './FirstSection/Script'



export namespace About
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_ClassNames': ['About', 'Selected'],
			'_Children':
			[
				FirstSection.Get(),
				Features.Get()
			]
		})
	}
}