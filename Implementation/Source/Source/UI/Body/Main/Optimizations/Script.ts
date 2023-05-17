import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Model from '../../../../Model/Namespace'
import * as OptimizationElement from './Optimization/Script'



export type Type_SortingTypeReadableName = string



export interface Interface_SortingType
{
	'ReadableName':Type_SortingTypeReadableName
	'Function': (Plugins: Model.Entities.Plugin.Interface[]) => Model.Entities.Plugin.Interface[]
}



export const SortingTypes: Interface_SortingType[] =
[
	{
		'ReadableName': 'Alphabetical',
		'Function': (Plugins) => Plugins.sort((Plugin_1, Plugin_2) => Plugin_1.ReadableName.localeCompare(Plugin_2.ReadableName))
	},
	{
		'ReadableName': 'Tags',
		'Function': (Plugins) => Plugins
	}
]



export function Get(SortingType: Interface_SortingType = SortingTypes[0]): HTMLElement
{
	return <HTMLElement> BaseElement
	({
		'HTMLTag': 'UL',
		'Children': (SortingType.Function)(Model.Data.Plugins.List).map((Plugin) => OptimizationElement.Get(Plugin))
	})
}