import * as IconElement from '../../../../../Library/Code/Frontend/Source/Elements/Elements/Icon/Script'



export type Type_ID = string
export type Type_ReadableName = string
export type Type_IconName = IconElement.Type_Name



export interface Interface
{
	'ID': Type_ID
	'ReadableName': Type_ReadableName
	'IconName': Type_IconName
}