import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { About } from './About/Script'
import { Optimizations } from './Optimizations/Script'
import { Playground } from './Playground/Script'



export namespace Main
{
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
				About.Get(),
				Optimizations.Get(),
				Playground.Get()
			]
		})
	}
}