import { Icon } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Icon/Script';



export function Get(): ReturnType<typeof Icon.Get>
{
	return Icon.Get
	({
		'Name': 'sort',
		'Style': Icon.Enum_Style.Outlined
	})
}