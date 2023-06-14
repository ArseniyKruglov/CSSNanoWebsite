import { Tags } from '../Data/Tags'
import { Plugin } from '../Entities/Plugin'



export namespace Plugins
{
	export const List: Plugin.Interface[] =
	[
		{
			'ID': 'Autoprefixer',
			'ReadableName': 'Autoprefixer',
			'Description': 'Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.',
			'Tags': [Tags.List.Unsafe]
		},
		{
			'ID': 'DeclarationSorter',
			'ReadableName': 'Declaration sorter',
			'Description': 'Sorts CSS declarations based on their property names.',
			'Tags': [Tags.List.Safe, Tags.List.Compression]
		},
		{
			'ID': 'Calc',
			'ReadableName': 'Calc',
			'Description': 'Reduces CSS calc expressions whereever possible, ensuring both browser compatibility and compression.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'Colormin',
			'ReadableName': 'Colormin',
			'Description': 'Converts between hex, HSL, RGB and CSS keywords, in order to produce the smallest equivalent color value.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'ConvertValues',
			'ReadableName': 'Convert values',
			'Description': 'Converts between equivalent length, time and angle values.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'DiscardComments',
			'ReadableName': 'Discard comments',
			'Description': 'Removes comments.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'DiscardExactDuplicates',
			'ReadableName': 'Discard exact duplicates',
			'Description': 'Removes exact duplicated rules, at-rules and declarations.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'DiscardEmpty',
			'ReadableName': 'Discard empty',
			'Description': 'Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'DiscardOverridden',
			'ReadableName': 'Discard overridden',
			'Description': 'Removes at-rules which have the same identifier as another.',
			'Tags': [Tags.List.Unsafe]
		},
		{
			'ID': 'DiscardUnused',
			'ReadableName': 'Discard unused',
			'Description': 'Removes at-rules that do not have any bearing on the CSS file.',
			'Tags': [Tags.List.SafeInsideOneFile]
		},
		{
			'ID': 'MergeIdents',
			'ReadableName': 'Merge idents',
			'Description': 'This will merge rules together that may have slightly different naming but do the same thing. Note that this is only unsafe if you rely on those animation names in JavaScript.',
			'Tags': [Tags.List.SafeInsideOneFile]
		},
		{
			'ID': 'MergeLonghand',
			'ReadableName': 'Merge longhand',
			'Description': 'Collapses longhand properties into the shorthand representation, and where possible will also collapse top/right/bottom/left values. Supports margin, padding & border longhands.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'MergeRules',
			'ReadableName': 'Merge rules',
			'Description': 'Merges adjacent rules by selectors & overlapping property/value pairs.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'MinifyFontValues',
			'ReadableName': 'Minify font values',
			'Description': 'Normalizes font & font-family declarations, and can convert font weight keywords to numeric values.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'MinifyGradients',
			'ReadableName': 'Minify gradients',
			'Description': 'Normalizes linear and radial gradient parameters.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'MinifyParams',
			'ReadableName': 'Minify params',
			'Description': 'Trims whitespace and normalizes at-rule parameters.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'MinifySelectors',
			'ReadableName': 'Minify selectors',
			'Description': 'Removes unnecessary qualified universal selectors, unquotes attribute selectors, trims & normalizes selector strings',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeCharset',
			'ReadableName': 'Normalize charset',
			'Description': 'Ensures that only a single @charset is present in the CSS file, and moves it to the top of the document.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeDisplayValues',
			'ReadableName': 'Normalize display values',
			'Description': 'Normalizes the two value syntax for display into the single value syntax where possible.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizePositions',
			'ReadableName': 'Normalize positions',
			'Description': 'Normalizes position values in the background, background-position, -webkit-perspective-origin and perspective-origin properties.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeRepeatStyle',
			'ReadableName': 'Normalize repeat style',
			'Description': 'Reduces the two value syntax for background-repeat into the single value syntax where possible, in both the property itself and the background shorthand. Also works for mask-repeat.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeString',
			'ReadableName': 'Normalize string',
			'Description': 'Standardises the usage of double or single quoted strings. Can also remove linebreaks which are inserted for aesthetic purposes.',
			'Tags': [Tags.List.Safe, Tags.List.Compression, Tags.List.Configurable]
		},
		{
			'ID': 'NormalizeTimingFunctions',
			'ReadableName': 'Normalize timing functions',
			'Description': 'Normalizes transition timing in the animation, animation-timing-function, transition and transition-timing-function properties.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeUnicode',
			'ReadableName': 'Normalize unicode',
			'Description': 'This optimisation can convert unicode-range descriptors to use the shorter wildcard ranges when a particular value meets the wildcard criteria.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeURL',
			'ReadableName': 'Normalize URL',
			'Description': 'Normalizes URL strings. It can remove default ports, resolve unnecessary directory traversal & unquote the value.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'NormalizeWhitespace',
			'ReadableName': 'Normalize whitespace',
			'Description': 'Trims whitespace inside and around rules, selectors & declarations, plus removes the final semicolon inside every selector.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'OrderedValues',
			'ReadableName': 'Ordered values',
			'Description': 'Properties affected by this transform can accept their arguments in an arbitrary order. This module normalizes that order, facilitating easier de-duplication.',
			'Tags': [Tags.List.Compression]
		},
		{
			'ID': 'ReduceIdents',
			'ReadableName': 'Reduce idents',
			'Description': 'Renames at-rules such as @keyframes.',
			'Tags': [Tags.List.SafeInsideOneFile]
		},
		{
			'ID': 'ReduceInitial',
			'ReadableName': 'Reduce initial',
			'Description': 'Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'ReduceTransforms',
			'ReadableName': 'Reduce transforms',
			'Description': 'Converts between transform functions when there is a shorthand equivalent.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'UniqueSelectors',
			'ReadableName': 'Unique selectors',
			'Description': 'Naturally sorts selectors for every rule, and removes duplicates.',
			'Tags': [Tags.List.Safe]
		},
		{
			'ID': 'ZIndex',
			'ReadableName': 'Z-index',
			'Description': 'Rebases z-index values. This is unsafe as it could potentially clash with other stylesheets, or JavaScript injected styles. However, it is safe if your stacking context has wholly been extracted into CSS.',
			'Tags': [Tags.List.SafeInsideOneFile]
		}
	]
}