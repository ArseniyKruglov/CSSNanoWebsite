import { LibraryElement_Heading } from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'
import { Entities } from '../../../../../../../../Main'



export namespace Element_Name
{
	export function Get(Plugin: Entities.Plugin.Interface): ReturnType<typeof LibraryElement_Heading.Get>
	{
		return LibraryElement_Heading.Get
		(
			Plugin.Name,
			2
		)
	}
}