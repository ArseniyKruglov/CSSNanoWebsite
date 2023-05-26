import { Button } from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Button/Script'



export namespace GetStarted
{
	export function Get(): ReturnType<typeof Button.Get>
	{
		return Button.Get
		({
			'_Text': 'Get started',
			'_Primary': true
		})
	}
}