import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Paragraph } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import { Entities } from '../../../../../../../Main'



export namespace Description
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLParagraphElement
	{
		return <HTMLParagraphElement> BaseElement.Create
		({
			'_Element': Paragraph.Get
			({
				'_Text': Plugin.Description
			})
		})
	}
}