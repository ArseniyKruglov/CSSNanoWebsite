import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'



export function Get(): HTMLDivElement
{
	return <HTMLDivElement> BaseElement.Create
	({
		'_HTMLTag': 'Div',
		'_ClassNames': ['SupportUs'],
		'_Modifications': (Element) =>
		{
			(<HTMLDivElement> Element).innerText = 'Support us'
		}
	})
}