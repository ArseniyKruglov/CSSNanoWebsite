import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'



export namespace Element_Filters
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Form'
		})
	}
}