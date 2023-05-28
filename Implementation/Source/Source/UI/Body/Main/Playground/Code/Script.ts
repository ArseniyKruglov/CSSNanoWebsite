import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'



export namespace Code
{
	export type Type_Code = string



	export interface Interface
	{
		'_Code': Type_Code
	}



	export function Get(Argument: Interface): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'_HTMLTag': 'Code',
			'_Modifications': (Element) =>
			{
				Element.innerHTML = Argument._Code
			}
		})
	}
}