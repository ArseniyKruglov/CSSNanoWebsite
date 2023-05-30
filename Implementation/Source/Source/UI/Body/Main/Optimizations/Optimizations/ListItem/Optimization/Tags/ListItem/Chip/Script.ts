import { BaseElement } from '../../../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_Chip } from '../../../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Chip/Script'
import * as Entities from '../../../../../../../../../../Entities/Namespace'



export namespace Chip
{
	export function Get(Tag: Entities.Tag.Interface): HTMLLIElement
	{
		return <HTMLLIElement> BaseElement.Create
		({
			'Element': LibraryElement_Chip.Get
			(
				Tag.ReadableName,
				true
			),
			'Classes': [Tag.ID]
		})
	}
}