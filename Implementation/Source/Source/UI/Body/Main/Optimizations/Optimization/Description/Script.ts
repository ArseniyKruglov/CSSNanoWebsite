import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Model from '../../../../../../Model/Namespace'
import * as Description from './Description/Script'
import * as Name from './Name/Script'



export function Get(Plugin: Model.Entities.Plugin.Interface): HTMLDivElement
{
	return <HTMLDivElement> BaseElement
	({
		'HTMLTag': 'Div',
		'Children':
		[
			Name.Get(Plugin),
			Description.Get(Plugin)
		]
	})
}