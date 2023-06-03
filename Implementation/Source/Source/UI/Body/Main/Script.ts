import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Plugins } from '../../../Data/Plugins'
import { Element_About } from './About/Script'
import { Element_Plugins } from './Optimizations/Script'
import { Element_Playground } from './Playground/Script'



export namespace Element_Main
{
	export function Get(): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'HTMLTag': 'Main',
			'Children':
			[
				Element_About.Get(),
				Element_Plugins.Get(Plugins.List),
				Element_Playground.Get()
			],
			'OnDraw': (Element) =>
			{
				Element.parentElement!.children[0].children[1].addEventListener('SelectionChanged', (Event: CustomEvent) =>
				{
					let Index: number = 0
					for (const Child of Element.children)
						Child.classList.toggle('Selected', Event.detail.Index === Index++)
				})
			}
		})
	}
}