import { LibraryElement_DecorativeImageWithAlpha } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/DecorativeImageWithAlpha/Script'



export namespace Element_Image
{
	export interface Interface extends LibraryElement_DecorativeImageWithAlpha.Interface
	{

	}



	export function Get(Image: Interface): ReturnType<typeof LibraryElement_DecorativeImageWithAlpha.Get>
	{
		return LibraryElement_DecorativeImageWithAlpha.Get(Image)
	}
}