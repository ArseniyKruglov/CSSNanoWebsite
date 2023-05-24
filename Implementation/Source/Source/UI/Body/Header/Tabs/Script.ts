import * as TabElement from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Tabs/Script'
import { Data } from '../../../../Main'



export function Get(): HTMLElement
{
	return TabElement.Get
	({
		'Tabs': Data.Tabs.List.map((Tab) =>
		({
			'Title': Tab.ReadableName,
			'Link': Tab.ID,
			'Selected': Tab === Data.Tabs.List[0]
		}))
	})
}