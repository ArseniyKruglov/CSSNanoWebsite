import { Fetch, Type_URL } from '../../../../../Library/Code/Frontend/Source/Fetch';
import { Type_StringifiedJSON } from '../../../../../Library/Code/TypeScript/Source/JSON';
import { API, Entities } from '../Main';
import { APIURL } from './Common';



export async function Get(): Promise<{ 'Tags': Entities.Tag.Interface[], 'Plugins': Entities.Plugin.Interface[] }>
{
	return Parse(await FetchJSON())



	async function FetchJSON(): Promise<Type_StringifiedJSON>
	{
		return (await Fetch(GetURL())).Text
	}

	function GetURL(): Type_URL
	{
		return `${APIURL}Data.json`
	}

	function Parse(Data: Type_StringifiedJSON): { 'Tags': Entities.Tag.Interface[], 'Plugins': Entities.Plugin.Interface[] }
	{
		return Deserialize(JSON.parse(Data))
	}

	function Deserialize(Data: { 'Tags': API.Tag.Interface_Serialized[], 'Plugins': API.Plugin.Interface_Serialized[] }): { 'Tags': Entities.Tag.Interface[], 'Plugins': Entities.Plugin.Interface[] }
	{
		return {
			'Tags': Data.Tags.map((Tag) => API.Tag.Deserialize(Tag)),
			'Plugins': Data.Plugins.map((Plugin) => API.Plugin.Deserialize(Plugin))
		}
	}
}