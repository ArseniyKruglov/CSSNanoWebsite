import { LibraryElement_Heading } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Name
{
	export type Type_Name = string



	export function Get(Name: Type_Name): ReturnType<typeof LibraryElement_Heading.Get>
	{
		return LibraryElement_Heading.Get(Name, 1)
	}
}