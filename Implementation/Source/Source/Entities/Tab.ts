import { LibraryElement_Icon } from '../../../../../Library/Code/Frontend/Source/Elements/Elements/Icon/Script'



export namespace Tab
{
	export type Type_ID = string
	export type Type_Name = string
	export type Type_IconName = LibraryElement_Icon.Type_Name



	export interface Interface
	{
		'ID': Type_ID
		'Name': Type_Name
		'IconName': Type_IconName
	}
}