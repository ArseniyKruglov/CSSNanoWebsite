import { DecorativeImageWithAlpha } from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/DecorativeImageWithAlpha/Script'



export namespace Logo
{
	export function Get(): ReturnType<typeof DecorativeImageWithAlpha.Get>
	{
		return DecorativeImageWithAlpha.Get
		({
			'Dimensions':
			{
				'Width': 1,
				'Height': 1
			},
			'Source': '/Implementation/Source/Source/Favicon.svg'
		})
	}
}