import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Description } from './Description/Script'
import { LibraryElement_Image } from './Image/Script'
import { Element_Title } from './Title/Script'



export namespace Element_Feature
{
	export interface Interface
	{
		'Image': LibraryElement_Image.Interface
		'Title': Element_Title.Type_Text
		'Description': Element_Description.Type_Text
	}



	export function Get(Argument: Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'LI',
			'Children':
			[
				LibraryElement_Image.Get(Argument.Image),
				Element_Title.Get(Argument.Title),
				Element_Description.Get(Argument.Description)
			]
		})
	}
}