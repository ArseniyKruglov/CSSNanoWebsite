import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Code } from './Code/Script'
import { Element_Options } from './Options/Script'



export namespace Element_Playground
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Classes': ['Playground'],
			'Children':
			[
				Element_Options.Get(),
				Element_Code.Get()
			]
		})
	}
}