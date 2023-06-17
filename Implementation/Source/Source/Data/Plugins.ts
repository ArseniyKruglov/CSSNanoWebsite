import { Tags } from '../Data/Tags'
import { Plugin } from '../Entities/Plugin'



export namespace Plugins
{
	export const List: Plugin.Interface[] =
	[
		{
			'ID': 'Autoprefixer',
			'Name': 'Autoprefixer',
			'Description': 'Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Unsafe,
			'Tags': []
		},
		{
			'ID': 'DeclarationSorter',
			'Name': 'Declaration sorter',
			'Description': 'Sorts CSS declarations based on their property names.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': [Tags.List.Compression]
		},
		{
			'ID': 'Calc',
			'Name': 'Calc',
			'Description': 'Reduces CSS calc expressions whereever possible, ensuring both browser compatibility and compression.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'Colormin',
			'Name': 'Colormin',
			'Description': 'Converts between hex, HSL, RGB and CSS keywords, in order to produce the smallest equivalent color value.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'ConvertValues',
			'Name': 'Convert values',
			'Description': 'Converts between equivalent length, time and angle values.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'DiscardComments',
			'Name': 'Discard comments',
			'Description': 'Removes comments.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'DiscardExactDuplicates',
			'Name': 'Discard exact duplicates',
			'Description': 'Removes exact duplicated rules, at-rules and declarations.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'DiscardEmpty',
			'Name': 'Discard empty',
			'Description': 'Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'DiscardOverridden',
			'Name': 'Discard overridden',
			'Description': 'Removes at-rules which have the same identifier as another.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Unsafe,
			'Tags': []
		},
		{
			'ID': 'DiscardUnused',
			'Name': 'Discard unused',
			'Description': 'Removes at-rules that do not have any bearing on the CSS file.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile,
			'Tags': []
		},
		{
			'ID': 'MergeIdents',
			'Name': 'Merge idents',
			'Description': 'This will merge rules together that may have slightly different naming but do the same thing. Note that this is only unsafe if you rely on those animation names in JavaScript.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile,
			'Tags': []
		},
		{
			'ID': 'MergeLonghand',
			'Name': 'Merge longhand',
			'Description': 'Collapses longhand properties into the shorthand representation, and where possible will also collapse top/right/bottom/left values. Supports margin, padding & border longhands.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'MergeRules',
			'Name': 'Merge rules',
			'Description': 'Merges adjacent rules by selectors & overlapping property/value pairs.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'MinifyFontValues',
			'Name': 'Minify font values',
			'Description': 'Normalizes font & font-family declarations, and can convert font weight keywords to numeric values.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'MinifyGradients',
			'Name': 'Minify gradients',
			'Description': 'Normalizes linear and radial gradient parameters.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'MinifyParams',
			'Name': 'Minify params',
			'Description': 'Trims whitespace and normalizes at-rule parameters.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'MinifySelectors',
			'Name': 'Minify selectors',
			'Description': 'Removes unnecessary qualified universal selectors, unquotes attribute selectors, trims & normalizes selector strings',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeCharset',
			'Name': 'Normalize charset',
			'Description': 'Ensures that only a single @charset is present in the CSS file, and moves it to the top of the document.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeDisplayValues',
			'Name': 'Normalize display values',
			'Description': 'Normalizes the two value syntax for display into the single value syntax where possible.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizePositions',
			'Name': 'Normalize positions',
			'Description': 'Normalizes position values in the background, background-position, -webkit-perspective-origin and perspective-origin properties.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeRepeatStyle',
			'Name': 'Normalize repeat style',
			'Description': 'Reduces the two value syntax for background-repeat into the single value syntax where possible, in both the property itself and the background shorthand. Also works for mask-repeat.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeString',
			'Name': 'Normalize string',
			'Description': 'Standardises the usage of double or single quoted strings. Can also remove linebreaks which are inserted for aesthetic purposes.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Configurable': true,
			'Tags': [Tags.List.Compression]
		},
		{
			'ID': 'NormalizeTimingFunctions',
			'Name': 'Normalize timing functions',
			'Description': 'Normalizes transition timing in the animation, animation-timing-function, transition and transition-timing-function properties.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeUnicode',
			'Name': 'Normalize unicode',
			'Description': 'This optimisation can convert unicode-range descriptors to use the shorter wildcard ranges when a particular value meets the wildcard criteria.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeURL',
			'Name': 'Normalize URL',
			'Description': 'Normalizes URL strings. It can remove default ports, resolve unnecessary directory traversal & unquote the value.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'NormalizeWhitespace',
			'Name': 'Normalize whitespace',
			'Description': 'Trims whitespace inside and around rules, selectors & declarations, plus removes the final semicolon inside every selector.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'OrderedValues',
			'Name': 'Ordered values',
			'Description': 'Properties affected by this transform can accept their arguments in an arbitrary order. This module normalizes that order, facilitating easier de-duplication.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': [Tags.List.Compression]
		},
		{
			'ID': 'ReduceIdents',
			'Name': 'Reduce idents',
			'Description': 'Renames at-rules such as @keyframes.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile,
			'Tags': []
		},
		{
			'ID': 'ReduceInitial',
			'Name': 'Reduce initial',
			'Description': 'Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'ReduceTransforms',
			'Name': 'Reduce transforms',
			'Description': 'Converts between transform functions when there is a shorthand equivalent.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'UniqueSelectors',
			'Name': 'Unique selectors',
			'Description': 'Naturally sorts selectors for every rule, and removes duplicates.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Tags': []
		},
		{
			'ID': 'ZIndex',
			'Name': 'Z-index',
			'Description': 'Rebases z-index values. This is unsafe as it could potentially clash with other stylesheets, or JavaScript injected styles. However, it is safe if your stacking context has wholly been extracted into CSS.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile,
			'Tags': []
		}
	]
}