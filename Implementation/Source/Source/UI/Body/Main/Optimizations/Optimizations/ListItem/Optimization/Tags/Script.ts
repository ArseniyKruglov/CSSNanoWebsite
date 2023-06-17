import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Data, Entities } from '../../../../../../../../Main'
import { ListItem } from './ListItem/Script'



export namespace Element_Tags
{
	export function Get(Plugin: Entities.Plugin.Interface): HTMLUListElement
	{
		return <HTMLUListElement> BaseElement.Create
		({
			'HTMLTag': 'UL',
			'Children': [ListItem.Get(GetTagBySafetyLevel(Plugin.SafetyLevel))]
		})
	}



	function GetTagBySafetyLevel(SafetyLevel: Entities.Plugin.Enum_SafetyLevel): Entities.Tag.Interface
	{
		if (SafetyLevel === Entities.Plugin.Enum_SafetyLevel.Safe)
			return Data.Tags.List.Safe

		if (SafetyLevel === Entities.Plugin.Enum_SafetyLevel.SafeInsideOneFile)
			return Data.Tags.List.SafeInsideOneFile

		if (SafetyLevel === Entities.Plugin.Enum_SafetyLevel.Unsafe)
			return Data.Tags.List.Unsafe
	}
}