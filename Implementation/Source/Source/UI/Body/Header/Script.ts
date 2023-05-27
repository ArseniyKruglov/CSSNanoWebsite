import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as LogoElement from './Logo/Script'
import * as TabsElement from './Tabs/Script'



export namespace Header
{
	export function Get(): HTMLElement
	{
		return <HTMLElement> BaseElement.Create
		({
			'_HTMLTag': 'Header',
			'_Children':
			[
				LogoElement.Get(),
				TabsElement.Get()
			],
			'_Modifications': (Element) =>
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