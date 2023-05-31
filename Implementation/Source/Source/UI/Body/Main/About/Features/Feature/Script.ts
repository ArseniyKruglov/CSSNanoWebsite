import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Description } from './Description/Script'
import { Element_Image } from './Image/Script'
import { Element_Name } from './Name/Script'



export namespace Element_Feature
{
	export interface Interface
	{
		'Image': Element_Image.Interface
		'Name': Element_Name.Type_Name
		'Description': Element_Description.Type_Description
	}



	export function Get(Argument: Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'LI',
			'Children':
			[
				Element_Image.Get(Argument.Image),
				Element_Name.Get(Argument.Name),
				Element_Description.Get(Argument.Description)
			]
		})
	}
}