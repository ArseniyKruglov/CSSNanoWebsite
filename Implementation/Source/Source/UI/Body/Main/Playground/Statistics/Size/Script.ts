import { BaseElement } from '../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'



export namespace Element_Size
{
	export const enum Enum_CompressionType
	{
		'No' = '',
		'GZip' = 'GZip',
		'Brotly' = 'Brotly'
	}



	export type Type_KB = number
	export type Type_SizeInKB = Type_KB



	export function Get(SizeInKB: Type_SizeInKB, CompressionType: Enum_CompressionType): HTMLOutputElement
	{
		return <HTMLOutputElement> BaseElement.Create
		({
			'HTMLTag': 'Output',
			'Text': GetText(SizeInKB, CompressionType)
		})
	}



	function GetText(SizeInKB: Type_SizeInKB, CompressionType: Enum_CompressionType): string
	{
		return `${FormatNumber(SizeInKB)}${(CompressionType && ` • ${CompressionType}`)}`
	}

	function FormatNumber(SizeInKB: Type_SizeInKB): string
	{
		const Options: Intl.NumberFormatOptions =
		{
			'style': 'unit',
			'unit': 'kilobyte'
		}

		return Intl.NumberFormat([], Options).format(SizeInKB)
	}
}