import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Element_Dialog } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Dialog/Script'
import * as Entities from '../../../Entities/Namespace'
import { Element_Name } from './Name/Script'



export namespace Element_PluginDetails
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLDialogElement
	{
		return <HTMLDialogElement> BaseElement.Create
		({
			'Element': Element_Dialog.Get(),
			'Children': [Element_Name.Get(Plugin.ReadableName)],
			'OnDraw': (Element) =>
			{
				(<HTMLDialogElement> Element).showModal()
			}
		})
	}
}