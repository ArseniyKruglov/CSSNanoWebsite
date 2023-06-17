import { LibraryElement_Select } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Select/Script'
import { Element_Plugins } from '../../../Optimizations/Script'



export namespace Element_Select
{
	export function Get(): ReturnType<typeof LibraryElement_Select.Get>
	{
		return LibraryElement_Select.Get(GetSortingTypeNames().map((SortingType) => ({ 'Text': SortingType })))
	}



	function GetSortingTypeNames(): Element_Plugins.SortingType.Type_Name[]
	{
		return GetSortingTypes().flatMap((SortingType) => SortingType.Name)
	}

	function GetSortingTypes(): Element_Plugins.SortingType.Interface[]
	{
		return Object.values(Element_Plugins.SortingType.SortingTypes)
	}
}