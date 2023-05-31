import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_FullscreenDialog } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/FullscreenDialog/Script'
import * as Entities from '../../../Entities/Namespace'
import { Element_Description } from './Description/Script'
import { Element_Name } from './Name/Script'



export namespace Element_PluginDetails
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLDialogElement
	{
		return <HTMLDialogElement> BaseElement.Create
		({
			'Element': LibraryElement_FullscreenDialog.Get(),
			'Children':
			[
				Element_Name.Get(Plugin.ReadableName),
				Element_Description.Get(Plugin.Description)
			],
			'OnDraw': (Element) =>
			{
				(<HTMLDialogElement> Element).showModal()
			}
		})
	}
}