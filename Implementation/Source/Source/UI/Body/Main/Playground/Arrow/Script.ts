import { Icon } from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Icon/Script'



export namespace Arrow
{
	export function Get(): ReturnType<typeof Icon.Get>
	{
		return Icon.Get
		({
			'_Name': 'arrow_forward',
			'_Style': Icon.Enum_Style.Outlined
		})
	}
}