import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as HeadingElement from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Heading/Script'
import * as Model from '../../../../../../../Model/Namespace'



export function Get(Plugin: Model.Entities.Plugin.Interface): HTMLElement
{
	return <HTMLHeadingElement> BaseElement
	({
		'MyElement': HeadingElement.Get
		({
			'Level': 2,
			'Text': Plugin.ReadableName
		})
	})
}