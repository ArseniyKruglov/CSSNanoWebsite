import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Description } from './Description/Script'
import { Image } from './Image/Script'
import { Title } from './Title/Script'



export namespace Feature
{
	export type Type_Description = string



	export interface Interface
	{
		'Image': Image.Interface
		'Title': Title.Interface
		'Description': Type_Description
	}



	export function Get(Argument: Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_Children':
			[
				Image.Get(Argument.Image),
				Title.Get(Argument.Title),
				Description.Get({ 'Text': Argument.Description })
			]
		})
	}
}