import { LibraryElement_InputWithName } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/InputWithName/Script'
import { LibraryElement_Select } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Select/Script'



export namespace Element_PresetSelector
{
	export function Get(): ReturnType<typeof LibraryElement_InputWithName.Get>
	{
		return LibraryElement_InputWithName.Get
		([
			'Preset',
			LibraryElement_Select.Get
			([
				{ 'Text': 'Default' },
				{ 'Text': 'Lite' },
				{ 'Text': 'Advanced' }
			])
		])
	}
}