import { Heading } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Title
{
	export type Type_Text = string



	export function Get(Text: Type_Text): ReturnType<typeof Heading.Get>
	{
		return Heading.Get
		({
			'Text': Text,
			'Level': 3
		})
	}
}