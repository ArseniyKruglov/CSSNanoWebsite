import { BottomNavigation as LibraryBottomNavigation } from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/BottomNavigation/Script'
import { Data } from '../../../Main'



export namespace BottomNavigation
{
	export function Get(): HTMLElement
	{
		return LibraryBottomNavigation.Get
		({
			'Tabs': Data.Tabs.List.map((Tab) =>
			({
				'Title':
				{
					'Title': Tab.ReadableName
				},
				'IconName': Tab.IconName,
				'Link': Tab.ID,
				'Selected': Tab === Data.Tabs.List[0]
			}))
		})
	}
}