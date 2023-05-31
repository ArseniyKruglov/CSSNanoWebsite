import { LibraryElement_InputWithIcon } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/InputWithIcon/Script'
import { Element_Icon } from './Icon/Script'
import { Element_Select } from './Select/Script'



export namespace Element_Sorting
{
	export function Get(): ReturnType<typeof LibraryElement_InputWithIcon.Get>
	{
		return LibraryElement_InputWithIcon.Get
		([
			Element_Icon.Get(),
			Element_Select.Get()
		])
	}
}