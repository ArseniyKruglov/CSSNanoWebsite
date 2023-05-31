import { LibraryElement_Heading } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Slogan
{
	export function Get(): ReturnType<typeof LibraryElement_Heading.Get>
	{
		return <ReturnType<typeof LibraryElement_Heading.Get>> LibraryElement_Heading.Get
		({
			'Text': 'PostCSS-based CSS optimizer.',
			'Level': 2
		})
	}
}