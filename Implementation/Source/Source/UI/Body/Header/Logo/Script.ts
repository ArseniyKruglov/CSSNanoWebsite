import { LibraryElement_Heading } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Logo
{
	export function Get(): ReturnType<typeof LibraryElement_Heading.Get>
	{
		return LibraryElement_Heading.Get('CSS Nano', 1)
	}
}