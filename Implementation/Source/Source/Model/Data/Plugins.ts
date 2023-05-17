import * as Tags from '../Data/Tags'
import * as Plugin from '../Entities/Plugin'



export const List: Plugin.Interface[] =
[
	{
		'ID': 'Autoprefixer',
		'ReadableName': 'Autoprefixer',
		'Description': 'Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.',
		'Tags': [Tags.List[1]]
	},
	{
		'ID': 'DeclarationSorter',
		'ReadableName': 'Declaration sorter',
		'Description': 'Sorts CSS declarations based on their property names.',
		'Tags': [Tags.List[0], Tags.List[2]]
	},
	{
		'ID': 'Calc',
		'ReadableName': 'Calc',
		'Description': 'Reduces CSS calc expressions whereever possible, ensuring both browser compatibility and compression.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'Colormin',
		'ReadableName': 'Colormin',
		'Description': 'Converts between hex, HSL, RGB and CSS keywords, in order to produce the smallest equivalent color value.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'ConvertValues',
		'ReadableName': 'Convert values',
		'Description': 'Converts between equivalent length, time and angle values.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'DiscardComments',
		'ReadableName': 'Discard comments',
		'Description': 'Removes comments.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'DiscardExactDuplicates',
		'ReadableName': 'Discard exact duplicates',
		'Description': 'Removes exact duplicated rules, at-rules and declarations.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'DiscardEmpty',
		'ReadableName': 'Discard empty',
		'Description': 'Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'DiscardOverridden',
		'ReadableName': 'Discard overridden',
		'Description': 'Removes at-rules which have the same identifier as another.',
		'Tags': [Tags.List[1]]
	},
	{
		'ID': 'DiscardUnused',
		'ReadableName': 'Discard unused',
		'Description': 'Removes at-rules that do not have any bearing on the CSS file.',
		'Tags': [Tags.List[3]]
	}
]