import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'



export namespace Guide
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_ClassNames': ['Guide']
		})
	}
}