import { BaseElement } from '../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Entities } from '../../../../../Main'
import { Element_ListItem } from './ListItem/Script'



export namespace Element_Plugins
{
	export function Get(PluginsList: Entities.Plugin.Interface[], SortingType: SortingType.Interface): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': ((SortingType.Function)(PluginsList)).map((Plugin) => Element_ListItem.Get(Plugin))
		})
	}



	export namespace SortingType
	{
		export type Type_Name = string
		export type Type_Function = (Plugins: Entities.Plugin.Interface[]) => Entities.Plugin.Interface[]



		export interface Interface
		{
			'Name': Type_Name
			'Function': (Plugins: Entities.Plugin.Interface[]) => Entities.Plugin.Interface[]
		}



		export const SortingTypes: { [Key in Type_Name]: Interface } =
		{
			'Alphabetical':
			{
				'Name': 'Alphabetical',
				'Function': (Plugins) => Plugins.sort((Plugin_1, Plugin_2) => Plugin_1.Name.localeCompare(Plugin_2.Name))
			},

			'Safety':
			{
				'Name': 'Safety',
				'Function': (Plugins) => Plugins.sort((Plugin_1, Plugin_2) => Plugin_1.SafetyLevel - Plugin_2.SafetyLevel)
			}
		}
	}
}