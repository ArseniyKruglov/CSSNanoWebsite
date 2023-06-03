import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Code } from './Code/Script'
import { Element_Options } from './Options/Script'
import { Element_Statistics } from './Statistics/Script'



export namespace Element_Playground
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'Div',
			'Classes': ['Playground'],
			'Children':
			[
				Element_Options.Get(),
				Element_Statistics.Get
				({
					'Before':
					{
						'No': 100500,
						'GZip': 10050,
						'Brotli': 1005
					},
					'After':
					{
						'No': 10000,
						'GZip': 1000,
						'Brotli': 100
					}
				}),
				Element_Code.Get()
			]
		})
	}
}