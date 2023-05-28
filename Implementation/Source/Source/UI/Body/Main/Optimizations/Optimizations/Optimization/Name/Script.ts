import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Heading } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'
import { Entities } from '../../../../../../../Main'



export namespace Name
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLElement
	{
		return <HTMLHeadingElement> BaseElement.Create
		({
			'_Element': Heading.Get
			({
				'_Level': 2,
				'_Text': Plugin.ReadableName
			})
		})
	}
}