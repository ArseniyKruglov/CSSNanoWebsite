import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Model from '../../../../../../Model/Namespace'
import * as ListItemElement from './ListItem/Script'



export function Get(Plugin: Model.Entities.Plugin.Interface): HTMLUListElement
{
	return <HTMLUListElement> BaseElement
	({
		'HTMLTag': 'UL',
		'Children': Plugin.Tags.map((Tag) => ListItemElement.Get(Tag))
	})
}