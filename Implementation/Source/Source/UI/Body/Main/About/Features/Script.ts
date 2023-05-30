import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Feature } from './Feature/Script'



export namespace Element_Features
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children':
			[
				Element_Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/postcss.svg',
						'Dimensions':
						{
							'Width': 1,
							'Height': 1
						}
					},
					'Title': 'PostCSS-based',
					'Description': 'CSS Nano is built upon PostCSS plugins and environments.'
				}),
				Element_Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/undraw_settings.svg',
						'Dimensions':
						{
							'Width': 5,
							'Height': 4
						}
					},
					'Title': '30+ plugins',
					'Description': 'CSS Nano has more than 30 plugins for optimizing your CSS.'
				}),
				Element_Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/undraw_config.svg',
						'Dimensions':
						{
							'Width': 5,
							'Height': 4
						}
					},
					'Title': 'Configurable',
					'Description': 'CSS Nano supports custom configs using presets which controls the level of optimization.'
				})
			]
		})
	}
}