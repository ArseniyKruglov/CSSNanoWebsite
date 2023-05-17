import * as Plugin from '../../../../../../CSSOptimizer/Source/Source/Core/Plugin/Interface'
import * as Tag from './Tag'



export interface Interface
{
	'ID': Plugin.Type_ID
	'ReadableName': Plugin.Type_ReadableName
	'Description': Plugin.Type_Description
	'Tags': Tag.Interface[]
}