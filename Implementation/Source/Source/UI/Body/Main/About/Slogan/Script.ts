import { Heading } from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Slogan
{
	export function Get(): HTMLHeadingElement
	{
		return <HTMLHeadingElement> Heading.Get
		({
			'_Level': 2,
			'_Text': 'Deliver your website\'s styles, faster.'
		})
	}
}