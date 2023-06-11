import { Preset as PresetEntitiy } from '../Entities/Preset'



export namespace Preset
{
	export const enum Enum
	{
		'Default',
		'Advanced',
		'Lite'
	}



	export const List: PresetEntitiy.Type_Name[] =
	[
		'Default',
		'Advanced',
		'Lite'
	]
}