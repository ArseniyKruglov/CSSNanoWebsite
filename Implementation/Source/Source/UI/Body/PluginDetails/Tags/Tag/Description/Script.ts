import { LibraryElement_Paragraph } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script';
import { Entities } from '../../../../../../Main';



export namespace Element_Description
{
	export function Get(Tag: Entities.Tag.Interface): ReturnType<typeof LibraryElement_Paragraph.Get>
	{
		return LibraryElement_Paragraph.Get(Tag.Description)
	}
}