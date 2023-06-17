import { LibraryElement_Paragraph } from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import { Entities } from '../../../../../../../../Main'



export namespace Element_Description
{
	export function Get(Plugin: Entities.Plugin.Interface): ReturnType<typeof LibraryElement_Paragraph.Get>
	{
		return LibraryElement_Paragraph.Get(Plugin.Description)
	}
}