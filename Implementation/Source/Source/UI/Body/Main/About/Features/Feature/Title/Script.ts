import { Heading } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Title
{
	export type Type_Text = string



	export interface Interface
	{
		'Text': Type_Text
	}



	export function Get(Argument: Interface): ReturnType<typeof Heading.Get>
	{
		return Heading.Get
		({
			'_Level': 3,
			'_Text': Argument.Text
		})
	}
}