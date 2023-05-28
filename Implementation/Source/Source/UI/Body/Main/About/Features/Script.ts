import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Feature } from './Feature/Script'



export namespace Features
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'UL',
			'_ClassNames': ['Featuers'],
			'_Children':
			[
				Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/postcss.svg',
						'Dimensions':
						{
							'Width': 79,
							'Height': 78
						}
					},
					'Title':
					{
						'Text': 'PostCSS-based'
					},
					'Description': 'CSS Nano is built upon PostCSS plugins and environments.'
				}),
				Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/undraw_settings.svg',
						'Dimensions':
						{
							'Width': 997,
							'Height': 804
						}
					},
					'Title':
					{
						'Text': '30+ plugins'
					},
					'Description': 'CSS Nano has more than 30 plugins for optimizing your CSS.'
				}),
				Feature.Get
				({
					'Image':
					{
						'Source': 'https://cssnano.co/img/undraw_config.svg',
						'Dimensions':
						{
							'Width': 970,
							'Height': 796
						}
					},
					'Title':
					{
						'Text': 'Configurable'
					},
					'Description': 'CSS Nano supports custom configs using presets which controls the level of optimization.'
				})
			]
		})
	}
}