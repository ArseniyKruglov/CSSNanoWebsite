import { LibraryElement_InputWithName } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/InputWithName/Script'
import { Element_Select } from './Select/Script'



export namespace Element_Sorting
{
	export function Get(): ReturnType<typeof LibraryElement_InputWithName.Get>
	{
		return LibraryElement_InputWithName.Get
		(
			'Sorting',
			Element_Select.Get()
		)
	}
}