import { LibraryElement_Select } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Select/Script'



export namespace Element_Select
{
	export function Get(): ReturnType<typeof LibraryElement_Select.Get>
	{
		return LibraryElement_Select.Get
		([
			{ 'Text': 'Alpabetical' },
			{ 'Text': 'Tags' }
		])
	}
}