import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Preset } from '../../../../../Data/Preset'
import { Optimizator } from '../../../../../Logic/Optimizator'
import { Element_Arrow } from './Arrow/Script'
import { Element_Code as ChildrenElement_Code } from './Code/Script'



export namespace Element_Code
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Classes': ['Code'],
			'Children':
			[
				ChildrenElement_Code.Get('Code'),
				Element_Arrow.Get(),
				ChildrenElement_Code.Get(Optimizator.Process('Code', Preset.Enum.Default))
			]
		})
	}
}