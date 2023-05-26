import { Paragraph } from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'



export namespace Description
{
	export function Get(): ReturnType<typeof Paragraph.Get>
	{
		return Paragraph.Get
		({
			'_Text': 'Plug in CSS Nano into your build step for modern CSS compression.'
		})
	}
}