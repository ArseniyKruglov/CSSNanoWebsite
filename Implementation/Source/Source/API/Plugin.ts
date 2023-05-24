import { Plugin, Tag } from '../Entities/Namespace'



export interface Interface_Serialized
{
	'ID': Plugin.Type_ID
	'ReadableName': Plugin.Type_ReadableName
	'Description': Plugin.Type_Description
	'Tags': Tag.Type_ID[]
}



export function Deserialize(Serialized: Interface_Serialized): Plugin.Interface
{
	return {
		'ID': Serialized.ID,
		'ReadableName': Serialized.ReadableName,
		'Description': Serialized.Description,
		'Tags': Serialized.Tags.map((Tag) => ({ 'ID': '1', 'ReadableName': '1', 'Description': '1' }))
	}
}