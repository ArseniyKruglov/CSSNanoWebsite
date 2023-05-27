import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Feature } from './Feature/Script'



export namespace Features
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
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
							'Width': 200,
							'Height': 200
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
							'Width': 248,
							'Height': 200
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
							'Width': 244,
							'Height': 200
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