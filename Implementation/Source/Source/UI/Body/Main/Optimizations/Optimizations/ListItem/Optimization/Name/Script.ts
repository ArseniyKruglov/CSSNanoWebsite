import { LibraryElement_Heading } from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Name
{
	export type Type_Text = string



	export function Get(Text: Type_Text): ReturnType<typeof LibraryElement_Heading.Get>
	{
		return LibraryElement_Heading.Get
		({
			'Text': Text,
			'Level': 2
		})
	}
}