import { LibraryElement_Icon } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Icon/Script'



export namespace Element_Arrow
{
	export function Get(): ReturnType<typeof LibraryElement_Icon.Get>
	{
		return LibraryElement_Icon.Get
		(
			'arrow_forward',
			LibraryElement_Icon.Enum_Style.Outlined
		)
	}
}