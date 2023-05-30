import { Tabs as LibraryElement_Tab } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Tabs/Script'
import { Data } from '../../../../Main'



export namespace Element_Tabs
{
	export function Get(): HTMLElement
	{
		return LibraryElement_Tab.Get
		(
			Data.Tabs.List.map((Tab) =>
			({
				'Title': Tab.ReadableName,
				'Link': Tab.ID,
				'Selected': Tab === Data.Tabs.List[0]
			}))
		)
	}
}