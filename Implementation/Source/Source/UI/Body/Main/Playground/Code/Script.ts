import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Arrow } from './Arrow/Script'
import { Element_Code as ChildrenElement_Code } from './Code/Script'



export namespace Element_Code
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Classes': ['Code'],
			'Children':
			[
				ChildrenElement_Code.Get('Before'),
				Element_Arrow.Get(),
				ChildrenElement_Code.Get('After')
			]
		})
	}
}