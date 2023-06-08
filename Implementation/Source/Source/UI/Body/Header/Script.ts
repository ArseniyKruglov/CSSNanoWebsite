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
				document.addEventListener('scroll', () => { HandleScroll(<HTMLElement> Element) })
			}
		})
	}



	function HandleScroll(Element: ReturnType<typeof Get>): void
	{
		Element.classList.toggle('Scrolled', IsElementScrolled(document.documentElement))
	}



	// TODO: To Library

	function IsElementScrolled(Element: HTMLElement): boolean
	{
		return Element.scrollTop !== 0
	}
}