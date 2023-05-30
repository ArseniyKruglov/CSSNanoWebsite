import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Logo } from './Logo/Script'
import { Element_Tabs } from './Tabs/Script'



export namespace Element_Header
{
	export function Get(): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'HTMLTag': 'Header',
			'Children':
			[
				Element_Logo.Get(),
				Element_Tabs.Get()
			],
			'Modifications': (Element) =>
			{
				document.addEventListener('scroll', () =>
				{
					const Scrolled: boolean = document.documentElement.scrollTop !== 0

					Element.classList.toggle('Scrolled', Scrolled)
				})
			}
		})
	}
}