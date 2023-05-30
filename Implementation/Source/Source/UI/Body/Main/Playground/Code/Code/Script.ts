import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement';



export namespace Element_Code
{
	export type Type_Code = string



	export function Get(Code: Type_Code): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'HTMLTag': 'Code',
			'Modifications': (Element) =>
			{
				(<HTMLElement> Element).innerText = Code;
				(<HTMLElement> Element).contentEditable = 'true';
			}
		})
	}
}