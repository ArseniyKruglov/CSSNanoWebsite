import { LibraryElement_Tabs } from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Tabs/Script'
import { Data } from '../../../../Main'



export namespace Element_Tabs
{
	export function Get(): ReturnType<typeof LibraryElement_Tabs.Get>
	{
		return LibraryElement_Tabs.Get
		(
			Data.Tabs.List.map((Tab) =>
			({
				'Name': Tab.Name,
				'Link': Tab.ID,
				'Selected': Tab === Data.Tabs.List[0]
			}))
		)
	}
}