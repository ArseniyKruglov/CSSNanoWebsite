import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Size } from './Size/Script'



export namespace Element_Statistics
{
	export interface Interface_Compressions<Type>
	{
		'No': Type
		'GZip': Type
		'Brotli': Type
	}

	export interface Interface
	{
		'Before': Interface_Compressions<number>
		'After': Interface_Compressions<number>
	}



	export function Get(Argument: Interface): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'Classes': ['Statistics'],
			'Children':
			[
				Element_Size.Get(Argument.Before.No, Element_Size.Enum_CompressionType.No),
				Element_Size.Get(Argument.After.No, Element_Size.Enum_CompressionType.No),
				Element_Size.Get(Argument.Before.Brotli, Element_Size.Enum_CompressionType.Brotly),
				Element_Size.Get(Argument.After.Brotli, Element_Size.Enum_CompressionType.Brotly),
				Element_Size.Get(Argument.Before.GZip, Element_Size.Enum_CompressionType.GZip),
				Element_Size.Get(Argument.After.GZip, Element_Size.Enum_CompressionType.GZip)
			]
		})
	}
}