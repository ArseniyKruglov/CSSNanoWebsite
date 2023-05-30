import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Features } from './Features/Script'
import { Element_Main } from './Main/Script'



export namespace Element_About
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Classes': ['About', 'Selected'],
			'Children':
			[
				Element_Main.Get(),
				Element_Features.Get()
			]
		})
	}
}