import { LibraryElement_List } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/List/Script'
import { Entities } from '../../../../Main'
import { Element_Tag } from './Tag/Script'



export namespace Element_Tags
{
	export function Get(Tags: Entities.Tag.Tag.Interface[]): ReturnType<typeof LibraryElement_List.Get>
	{
		return LibraryElement_List.Get(Tags.map((Tag) => Element_Tag.Get(Tag)))
	}
}