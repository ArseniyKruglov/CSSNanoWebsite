import { Data, Entities } from '../Main'
import { Tag } from './Tag'



export namespace Plugin
{
	export const enum Enum_SafetyLevel
	{
		'Safe',
		'SafeInsideOneFile',
		'Unsafe'
	}



	export type Type_ID = string
	export type Type_Name = string
	export type Type_Description = string



	export interface Interface
	{
		'ID': Type_ID
		'Name': Type_Name
		'Description': Type_Description
		'Preset': Data.Preset.Enum
		'SafetyLevel': Enum_SafetyLevel
		'Configurable'?: boolean
	}
}