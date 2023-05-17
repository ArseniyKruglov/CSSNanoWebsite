import * as TabElement from '../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Tabs/Script';
import * as Model from '../../../../Model/Namespace';



export function Get(): HTMLElement
{
	return TabElement.Get
	({
		'Tabs': Model.Data.Tabs.List.map((Tab) => { return {
			'Title': Tab.ReadableName,
			'Link': Tab.ID,
			'Selected': Tab === Model.Data.Tabs.List[0]
		}})
	})
}