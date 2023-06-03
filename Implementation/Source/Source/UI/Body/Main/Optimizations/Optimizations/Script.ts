import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../Main'
import { Element_ListItem } from './ListItem/Script'



export namespace Element_Plugins
{
	export namespace SortingType
	{
		export type Type_ReadableName = string
		export type Type_Function = (Plugins: Entities.Plugin.Interface[]) => Entities.Plugin.Interface[]



		export interface Interface
		{
			'ReadableName': Type_ReadableName
			'Function': (Plugins: Entities.Plugin.Interface[]) => Entities.Plugin.Interface[]
		}



		export const SortingTypes: { [Key in Type_ReadableName]: Interface } =
		{
			'Alphabetical':
			{
				'ReadableName': 'Alphabetical',
				'Function': (Plugins) => Plugins.sort((Plugin_1, Plugin_2) => Plugin_1.ReadableName.localeCompare(Plugin_2.ReadableName))
			},

			'Tags':
			{
				'ReadableName': 'Tags',
				'Function': (Plugins) => Plugins
			}
		}
	}



	export function Get(PluginsList: Entities.Plugin.Interface[], SortingType: SortingType.Interface): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': (SortingType.Function)(PluginsList).map((Plugin) => Element_ListItem.Get(Plugin))
		})
	}
}