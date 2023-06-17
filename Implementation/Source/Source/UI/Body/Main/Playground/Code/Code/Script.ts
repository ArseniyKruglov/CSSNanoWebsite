import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement';
import { Preset } from '../../../../../../Data/Preset';
import { Optimizator } from '../../../../../../Logic/Optimizator';



export namespace Element_Code
{
	export type Type_Code = string



	export function Get(Code: Type_Code): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'HTMLTag': 'Code',
			'Text': Code
		})
	}
}