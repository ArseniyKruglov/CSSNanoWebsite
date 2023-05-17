import * as HeadingElement from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'
import * as Model from '../../../../Model/Namespace'



export function Get(Title: Model.Entities.Tag.Type_ReadableName): ReturnType<typeof HeadingElement['Get']>
{
	return HeadingElement.Get
	({
		'Text': Title,
		'Level': 1
	})
}