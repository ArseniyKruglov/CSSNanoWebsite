import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as ParagraphElement from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import * as Model from '../../../../../../../Model/Namespace'



export function Get(Plugin: Model.Entities.Plugin.Interface): HTMLParagraphElement
{
	return <HTMLParagraphElement> BaseElement
	({
		'MyElement': ParagraphElement.Get
		({
			'Text': Plugin.Description
		})
	})
}