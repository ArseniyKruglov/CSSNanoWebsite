import * as CheckboxWithTitleElement from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/CheckboxWithTitle/Script'
import * as Model from '../../../../../../Model/Namespace'



export function Get(Tag: Model.Entities.Tag.Interface): ReturnType<typeof CheckboxWithTitleElement['Get']>
{
	return CheckboxWithTitleElement.Get
	({
		'Title': Tag.ReadableName,
		'Checked': true
	})
}