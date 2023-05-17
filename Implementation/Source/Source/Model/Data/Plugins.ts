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
	},
	{
		'ID': 'MergeIdents',
		'ReadableName': 'Merge idents',
		'Description': 'This will merge rules together that may have slightly different naming but do the same thing. Note that this is only unsafe if you rely on those animation names in JavaScript.',
		'Tags': [Tags.List[3]]
	},
	{
		'ID': 'MergeLonghand',
		'ReadableName': 'Merge longhand',
		'Description': 'Collapses longhand properties into the shorthand representation, and where possible will also collapse top/right/bottom/left values. Supports margin, padding & border longhands.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'MergeRules',
		'ReadableName': 'Merge rules',
		'Description': 'Merges adjacent rules by selectors & overlapping property/value pairs.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'MinifyFontValues',
		'ReadableName': 'Minify font values',
		'Description': 'Normalizes font & font-family declarations, and can convert font weight keywords to numeric values.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'MinifyGradients',
		'ReadableName': 'Minify gradients',
		'Description': 'Normalizes linear and radial gradient parameters.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'MinifyParams',
		'ReadableName': 'Minify params',
		'Description': 'Trims whitespace and normalizes at-rule parameters.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'MinifySelectors',
		'ReadableName': 'Minify selectors',
		'Description': 'Removes unnecessary qualified universal selectors, unquotes attribute selectors, trims & normalizes selector strings',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeCharset',
		'ReadableName': 'Normalize charset',
		'Description': 'Ensures that only a single @charset is present in the CSS file, and moves it to the top of the document. This prevents multiple, invalid declarations occurring through naïve CSS concatenation. Note that by default, new @charset rules will not be added to the CSS.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeDisplayValues',
		'ReadableName': 'Normalize display values',
		'Description': 'Normalizes the two value syntax for display into the single value syntax where possible.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizePositions',
		'ReadableName': 'Normalize positions',
		'Description': 'Normalizes position values in the background, background-position, -webkit-perspective-origin and perspective-origin properties.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeRepeatStyle',
		'ReadableName': 'Normalize repeat style',
		'Description': 'Reduces the two value syntax for background-repeat into the single value syntax where possible, in both the property itself and the background shorthand. Also works for mask-repeat.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeString',
		'ReadableName': 'Normalize string',
		'Description': 'Standardises the usage of double or single quoted strings. Can also remove linebreaks which are inserted for aesthetic purposes.',
		'Tags': [Tags.List[0], Tags.List[2], Tags.List[4]]
	},
	{
		'ID': 'NormalizeTimingFunctions',
		'ReadableName': 'Normalize timing functions',
		'Description': 'Normalizes transition timing in the animation, animation-timing-function, transition and transition-timing-function properties.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeUnicode',
		'ReadableName': 'Normalize unicode',
		'Description': 'This optimisation can convert unicode-range descriptors to use the shorter wildcard ranges when a particular value meets the wildcard criteria. Values will be converted when the code matches 0 & f in the same place on both sides of the range. So, u+2000-2fff can be converted to u+2???, but u+2100-2fff will be left as it is.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeURL',
		'ReadableName': 'Normalize URL',
		'Description': 'Normalizes URL strings. It can remove default ports, resolve unnecessary directory traversal & unquote the value.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'NormalizeWhitespace',
		'ReadableName': 'Normalize whitespace',
		'Description': 'Trims whitespace inside and around rules, selectors & declarations, plus removes the final semicolon inside every selector.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'OrderedValues',
		'ReadableName': 'Ordered values',
		'Description': 'Properties affected by this transform can accept their arguments in an arbitrary order. This module normalizes that order, facilitating easier de-duplication.',
		'Tags': [Tags.List[2]]
	},
	{
		'ID': 'ReduceIdents',
		'ReadableName': 'Reduce idents',
		'Description': 'Renames at-rules such as @keyframes.',
		'Tags': [Tags.List[3]]
	},
	{
		'ID': 'ReduceInitial',
		'ReadableName': 'Reduce initial',
		'Description': 'Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'ReduceTransforms',
		'ReadableName': 'Reduce transforms',
		'Description': 'Converts between transform functions when there is a shorthand equivalent.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'UniqueSelectors',
		'ReadableName': 'Unique selectors',
		'Description': 'Naturally sorts selectors for every rule, and removes duplicates.',
		'Tags': [Tags.List[0]]
	},
	{
		'ID': 'ZIndex',
		'ReadableName': 'Z-index',
		'Description': 'Rebases z-index values. This is unsafe as it could potentially clash with other stylesheets, or JavaScript injected styles. However, it is safe if your stacking context has wholly been extracted into CSS.',
		'Tags': [Tags.List[3]]
	}
]