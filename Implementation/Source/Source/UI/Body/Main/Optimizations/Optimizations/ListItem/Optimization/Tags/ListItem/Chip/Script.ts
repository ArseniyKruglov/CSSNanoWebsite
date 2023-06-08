import { BaseElement } from '../../../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_Chip } from '../../../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Chip/Script'
import { Entities } from '../../../../../../../../../../Main'



export namespace Element_Chip
{
	export function Get(Tag: Entities.Tag.Tag.Interface): ReturnType<typeof LibraryElement_Chip.Get>
	{
		return <ReturnType<typeof LibraryElement_Chip.Get>> BaseElement.Create
		({
			'Element': LibraryElement_Chip.Get(Tag.ReadableName, true),
			'Classes': [Tag.ID]
		})
	}
}