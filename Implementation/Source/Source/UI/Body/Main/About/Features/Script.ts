import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Feature } from './Feature/Script'



export namespace Element_Features
{
	const List: Element_Feature.Interface[] =
	[
		{
			'Image':
			{
				'Source': 'https://cssnano.co/img/postcss.svg',
				'Dimensions':
				{
					'Width': 1,
					'Height': 1
				}
			},
			'Name': 'PostCSS-based',
			'Description': 'CSS Nano is built upon PostCSS plugins and environments.'
		},
		{
			'Image':
			{
				'Source': 'https://cssnano.co/img/undraw_settings.svg',
				'Dimensions':
				{
					'Width': 5,
					'Height': 4
				}
			},
			'Name': '30+ plugins',
			'Description': 'CSS Nano has more than 30 plugins for optimizing your CSS.'
		},
		{
			'Image':
			{
				'Source': 'https://cssnano.co/img/undraw_config.svg',
				'Dimensions':
				{
					'Width': 5,
					'Height': 4
				}
			},
			'Name': 'Configurable',
			'Description': 'CSS Nano supports custom configs using presets which controls the level of optimization.'
		}
	]



	export function Get(): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': List.map((Feature) => Element_Feature.Get(Feature))
		})
	}
}