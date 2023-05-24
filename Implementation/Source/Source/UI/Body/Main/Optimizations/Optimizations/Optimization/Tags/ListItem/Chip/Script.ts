import { BaseElement } from '../../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Chip from '../../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Chip/Script'
import * as Entities from '../../../../../../../../../Entities/Namespace'



export function Get(Tag: Entities.Tag.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement.Create
	({
		'_Element': Chip.Get
		({
			'_Text': Tag.ReadableName,
			'_Pill': true
		}),
		'_ClassNames': [Tag.ID]
	})
}