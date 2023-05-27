import { DecorativeImageWithAlpha } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/DecorativeImageWithAlpha/Script'



export namespace Image
{
	export interface Interface extends DecorativeImageWithAlpha.Interface
	{

	}



	export function Get(Argument: Interface): ReturnType<typeof DecorativeImageWithAlpha.Get>
	{
		return DecorativeImageWithAlpha.Get(Argument)
	}
}