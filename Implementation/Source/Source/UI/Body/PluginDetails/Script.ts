import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_FullscreenDialog } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/FullscreenDialog/Script'
import * as Entities from '../../../Entities/Namespace'
import { Element_Description } from './Description/Script'
import { Element_Name } from './Name/Script'



export namespace Element_PluginDetails
{
	export function Get(Plugin: Entities.Plugin.Interface): ReturnType<typeof LibraryElement_FullscreenDialog.Get>
	{
		return <ReturnType<typeof LibraryElement_FullscreenDialog.Get>> BaseElement.Create
		({
			'Element': LibraryElement_FullscreenDialog.Get(),
			'Children':
			[
				Element_Name.Get(Plugin.ReadableName),
				Element_Description.Get(Plugin.Description)
			],
			'OnDraw': (Element) =>
			{
				Open(<HTMLDialogElement> Element)
				SetTabTitle(Plugin.ReadableName)
			}
		})
	}



	function Open(Dialog: HTMLDialogElement): void
	{
		Dialog.showModal()
	}

	function SetTabTitle(ReadableName: Entities.Plugin.Type_ReadableName): void
	{
		document.title = ReadableName
	}
}