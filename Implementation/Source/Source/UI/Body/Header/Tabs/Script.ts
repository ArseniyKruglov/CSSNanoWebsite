import { LibraryElement_Tabs } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Tabs/Script'
import { Data } from '../../../../Main'



export namespace Element_Tabs
{
	export function Get(): HTMLElement
	{
		return LibraryElement_Tabs.Get
		(
			Data.Tabs.List.map((Tab) =>
			({
				'Name': Tab.ReadableName,
				'Link': Tab.ID,
				'Selected': Tab === Data.Tabs.List[0]
			}))
		)
	}
}