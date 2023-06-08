import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Logo } from './Logo/Script'
import { Element_Slogan } from './Slogan/Script'



export namespace Element_Main
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Children':
			[
				Element_Logo.Get(),
				Element_Slogan.Get()
			]
		})
	}
}