import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as HeadingElement from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'
import { Entities } from '../../../../../../../../Main'



export function Get(Plugin: Entities.Plugin.Interface): HTMLElement
{
	return <HTMLHeadingElement> BaseElement.Create
	({
		'_Element': HeadingElement.Get
		({
			'_Level': 2,
			'_Text': Plugin.ReadableName
		})
	})
}