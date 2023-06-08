import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement';
import { Optimize } from '../../../../../../Logic/Optimize';



export namespace Element_Code
{
	export type Type_Code = string



	export function Get(Code: Type_Code): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'HTMLTag': 'Code',
			'Text': Code,
			'Modifications': (Element) =>
			{
				(<HTMLElement> Element).contentEditable = 'true'
			},
			'OnDraw': (Element) =>
			{
				const OutputElement: Element = Element.parentElement.lastElementChild

				if (Element !== OutputElement)
					Element.addEventListener('input', () =>
					{
						OutputElement.innerHTML = Optimize(Element.innerHTML)
					})
			}
		})
	}
}