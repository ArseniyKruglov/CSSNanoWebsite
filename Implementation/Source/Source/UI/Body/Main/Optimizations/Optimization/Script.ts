import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Model from '../../../../../Model/Namespace'
import * as DescriptionElement from './Description/Script'
import * as TagsElement from './Tags/Script'



export function Get(Plugin: Model.Entities.Plugin.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement
	({
		'HTMLTag': 'LI',
		'Children':
		[
			DescriptionElement.Get(Plugin),
			TagsElement.Get(Plugin)
		]
	})
}