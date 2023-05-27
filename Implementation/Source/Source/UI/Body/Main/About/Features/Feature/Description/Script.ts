import { Paragraph } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'



export namespace Description
{
	export type Type_Text = string



	export interface Interface
	{
		'Text': Type_Text
	}



	export function Get(Argument: Interface): ReturnType<typeof Paragraph.Get>
	{
		return Paragraph.Get
		({
			'_Text': Argument.Text
		})
	}
}