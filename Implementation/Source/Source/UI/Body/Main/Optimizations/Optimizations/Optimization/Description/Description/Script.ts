import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as ParagraphElement from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import { Entities } from '../../../../../../../../Main'



export function Get(Plugin: Entities.Plugin.Interface): HTMLParagraphElement
{
	return <HTMLParagraphElement> BaseElement.Create
	({
		'_Element': ParagraphElement.Get
		({
			'_Text': Plugin.Description
		})
	})
}