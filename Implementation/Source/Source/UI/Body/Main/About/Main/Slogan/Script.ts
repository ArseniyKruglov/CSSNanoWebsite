import { Heading } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Slogan
{
	type Type_Text = string



	const Text: Type_Text = 'PostCSS-based CSS optimizer.'



	export function Get(): HTMLHeadingElement
	{
		return <HTMLHeadingElement> Heading.Get
		({
			'Text': Text,
			'Level': 2
		})
	}
}