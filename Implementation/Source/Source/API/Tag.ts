import { Entities } from '../Main'



export interface Interface_Serialized
{
	'ID': Entities.Tag.Type_ID
	'ReadableName': Entities.Tag.Type_ReadableName
	'Description': Entities.Tag.Type_Description
}



export function Deserialize(Serialized: Interface_Serialized): Entities.Tag.Interface
{
	return Serialized
}