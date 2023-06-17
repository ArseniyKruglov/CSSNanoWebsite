import { BaseElement } from '../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_FullscreenDialog } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/FullscreenDialog/Script'
import * as Entities from '../../../Entities/Namespace'
import { Element_Description } from './Description/Script'
import { Element_Name } from './Name/Script'
import { Element_Tags } from './Tags/Script'



export namespace Element_PluginDetails
{
	export function Get(Plugin: Entities.Plugin.Interface): ReturnType<typeof LibraryElement_FullscreenDialog.Get>
	{
		return <ReturnType<typeof LibraryElement_FullscreenDialog.Get>> BaseElement.Create
		({
			'Element': LibraryElement_FullscreenDialog.Get(),
			'Children':
			[
				Element_Name.Get(Plugin.Name),
				Element_Description.Get(Plugin.Description)
			],
			'OnDraw': (Element) =>
			{
				Open(<HTMLDialogElement> Element)
				TabTitle_Set(Plugin.Name)
				Element.addEventListener('close', () => { OnClose() })
			}
		})
	}



	function Open(Dialog: HTMLDialogElement): void
	{
		Dialog.showModal()
	}



	function OnClose(): void
	{
		TabTitle_Reset()
	}



	function TabTitle_Set(Name: Entities.Plugin.Type_Name): void
	{
		document.title = Name
	}

	function TabTitle_Reset(): void
	{
		document.title = 'CSS Nano'
	}
}