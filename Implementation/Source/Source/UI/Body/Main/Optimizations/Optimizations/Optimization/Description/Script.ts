import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../../../Main'
import * as Description from './Description/Script'
import * as Name from './Name/Script'



export function Get(Plugin: Entities.Plugin.Interface): HTMLDivElement
{
	return <HTMLDivElement> BaseElement.Create
	({
		'_HTMLTag': 'Div',
		'_Children':
		[
			Name.Get(Plugin),
			Description.Get(Plugin)
		]
	})
}