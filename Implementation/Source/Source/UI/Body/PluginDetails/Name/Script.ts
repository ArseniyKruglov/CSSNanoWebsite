import { Heading } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'



export namespace Element_Name
{
	export type Type_Name = string



	export function Get(Name: Type_Name): ReturnType<typeof Heading.Get>
	{
		return Heading.Get
		({
			'Text': Name,
			'Level': 1
		})
	}
}