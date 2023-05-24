import * as Tag from './Tag'



export type Type_ID = string
export type Type_ReadableName = string
export type Type_Description = string
export type Type_Tags = Tag.Type_ID[]



export interface Interface_Serialized
{
	'ID': Type_ID
	'ReadableName': Type_ReadableName
	'Description': Type_Description
	'Tags': Type_Tags
}