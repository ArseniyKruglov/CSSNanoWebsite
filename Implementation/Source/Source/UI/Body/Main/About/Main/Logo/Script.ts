import { DecorativeImageWithAlpha } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/DecorativeImageWithAlpha/Script'



export namespace Element_Logo
{
	export function Get(): ReturnType<typeof DecorativeImageWithAlpha.Get>
	{
		return DecorativeImageWithAlpha.Get
		({
			'Source': 'https://cssnano.co/img/favicon.svg',
			'Dimensions':
			{
				'Width': 1,
				'Height': 1
			}
		})
	}
}