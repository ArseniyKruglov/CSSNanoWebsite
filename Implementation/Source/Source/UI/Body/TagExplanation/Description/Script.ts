import * as ParagraphElement from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import * as Model from '../../../../Model/Namespace'



export function Get(Description: Model.Entities.Tag.Type_Description): ReturnType<typeof ParagraphElement['Get']>
{
	return ParagraphElement.Get
	({
		'Text': Description
	})
}