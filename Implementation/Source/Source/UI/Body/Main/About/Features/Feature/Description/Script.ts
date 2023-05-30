import { LibraryElement_Paragraph } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'



export namespace Element_Description
{
	export type Type_Text = string



	export function Get(Text: Type_Text): ReturnType<typeof LibraryElement_Paragraph.Get>
	{
		return LibraryElement_Paragraph.Get(Text)
	}
}