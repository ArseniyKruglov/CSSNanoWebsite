import { LibraryElement_BottomNavigation } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/BottomNavigation/Script'
import { Data } from '../../../Main'



export namespace Element_BottomNavigation
{
	export function Get(): HTMLElement
	{
		return LibraryElement_BottomNavigation.Get
		(
			Data.Tabs.List.map((Tab) =>
			({
				'Title': Tab.ReadableName,
				'IconName': Tab.IconName,
				'Link': Tab.ID,
				'Selected': Tab === Data.Tabs.List[0]
			}))
		)
	}
}