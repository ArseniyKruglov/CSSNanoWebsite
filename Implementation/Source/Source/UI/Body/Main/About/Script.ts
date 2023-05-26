import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Description } from './Description/Script'
import { GetStarted } from './GetStarted/Script'
import { Logo } from './Logo/Script'
import { Slogan } from './Slogan/Script'



export namespace About
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_ClassNames': ['About', 'Selected'],
			'_Children':
			[
				Logo.Get(),
				Slogan.Get(),
				Description.Get(),
				GetStarted.Get()
			]
		})
	}
}