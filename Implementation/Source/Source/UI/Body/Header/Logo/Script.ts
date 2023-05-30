import { Heading } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Logo
{
	export function Get(): HTMLHeadingElement
	{
		return Heading.Get
		({
			'Text': 'CSS Nano',
			'Level': 1
		})
	}
}