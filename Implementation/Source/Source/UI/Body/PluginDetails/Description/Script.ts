import { LibraryElement_Paragraph } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'



export namespace Element_Description
{
	export type Type_Description = string



	export function Get(Description: Type_Description): ReturnType<typeof LibraryElement_Paragraph.Get>
	{
		return LibraryElement_Paragraph.Get(Description)
	}
}