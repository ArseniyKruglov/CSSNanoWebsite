import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as AboutElement from './About/Script'
import * as GuideElement from './Guide/Script'
import * as SupportUsElement from './SupportUs/Script'



export function Get(): HTMLElement
{
	return <HTMLElement> BaseElement.Create
	({
		'_HTMLTag': 'Main',
		'_Modifications': (Element) =>
		{
			setTimeout(() =>
			{
				Element.parentElement!.children[0].children[1].addEventListener('SelectionChanged', (Event: CustomEvent) =>
				{
					[...Element.children].forEach((Child, Index) =>
					{
						Child.classList.toggle('Selected', Event.detail.Index === Index)
					})
				})
			}, 0)
		},
		'_Children':
		[
			AboutElement.Get(),
			GuideElement.Get(),
			SupportUsElement.Get()
		]
	})
}