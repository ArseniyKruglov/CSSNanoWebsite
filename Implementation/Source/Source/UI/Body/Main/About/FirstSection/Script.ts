import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Logo } from './Logo/Script'
import { Slogan } from './Slogan/Script'



export namespace FirstSection
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_Children':
			[
				Logo.Get(),
				Slogan.Get()
			]
		})
	}
}