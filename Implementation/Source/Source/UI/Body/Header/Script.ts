import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as LogoElement from './Logo/Script'
import * as TabsElement from './Tabs/Script'



export function Get(): HTMLElement
{
	return <HTMLElement> BaseElement
	({
		'HTMLTag': 'Header',
		'Children':
		[
			LogoElement.Get(),
			TabsElement.Get()
		]
	})
}