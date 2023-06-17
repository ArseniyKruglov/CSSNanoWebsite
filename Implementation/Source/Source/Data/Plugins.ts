import { Tags } from '../Data/Tags'
import { Plugin } from '../Entities/Plugin'
import { Data } from '../Main'



export namespace Plugins
{
	export const List: Plugin.Interface[] =
	[
		{
			'ID': 'autoprefixer',
			'Name': 'Autoprefixer',
			'Description': 'Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.',
			'Preset': Data.Preset.Enum.Advanced,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Unsafe
		},
		{
			'ID': 'cssDeclarationSorter',
			'Name': 'Declaration sorter',
			'Description': 'Sorts CSS declarations based on their property names.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'calc',
			'Name': 'Calc',
			'Description': 'Reduces CSS calc expressions whereever possible, ensuring both browser compatibility and compression.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'colormin',
			'Name': 'Colormin',
			'Description': 'Converts between hex, HSL, RGB and CSS keywords, in order to produce the smallest equivalent color value.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'convertValues',
			'Name': 'Convert values',
			'Description': 'Converts between equivalent length, time and angle values.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'discardComments',
			'Name': 'Discard comments',
			'Description': 'Removes comments.',
			'Preset': Data.Preset.Enum.Lite,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'discardDuplicates',
			'Name': 'Discard exact duplicates',
			'Description': 'Removes exact duplicated rules, at-rules and declarations.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'discardEmpty',
			'Name': 'Discard empty',
			'Description': 'Removes empty rules, media queries and rules with empty selectors, as they do not affect the output.',
			'Preset': Data.Preset.Enum.Lite,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'discardOverridden',
			'Name': 'Discard overridden',
			'Description': 'Removes at-rules which have the same identifier as another.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Unsafe
		},
		{
			'ID': 'discardUnused',
			'Name': 'Discard unused',
			'Description': 'Removes at-rules that do not have any bearing on the CSS file.',
			'Preset': Data.Preset.Enum.Advanced,
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile
		},
		{
			'ID': 'mergeIdents',
			'Name': 'Merge idents',
			'Description': 'This will merge rules together that may have slightly different naming but do the same thing. Note that this is only unsafe if you rely on those animation names in JavaScript.',
			'Preset': Data.Preset.Enum.Advanced,
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile
		},
		{
			'ID': 'mergeLonghand',
			'Name': 'Merge longhand',
			'Description': 'Collapses longhand properties into the shorthand representation, and where possible will also collapse top/right/bottom/left values. Supports margin, padding & border longhands.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'mergeRules',
			'Name': 'Merge rules',
			'Description': 'Merges adjacent rules by selectors & overlapping property/value pairs.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'minifyFontValues',
			'Name': 'Minify font values',
			'Description': 'Normalizes font & font-family declarations, and can convert font weight keywords to numeric values.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'minifyGradients',
			'Name': 'Minify gradients',
			'Description': 'Normalizes linear and radial gradient parameters.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'minifyParams',
			'Name': 'Minify params',
			'Description': 'Trims whitespace and normalizes at-rule parameters.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'minifySelectors',
			'Name': 'Minify selectors',
			'Description': 'Removes unnecessary qualified universal selectors, unquotes attribute selectors, trims & normalizes selector strings',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeCharset',
			'Name': 'Normalize charset',
			'Description': 'Ensures that only a single @charset is present in the CSS file, and moves it to the top of the document.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeDisplayValues',
			'Name': 'Normalize display values',
			'Description': 'Normalizes the two value syntax for display into the single value syntax where possible.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizePositions',
			'Name': 'Normalize positions',
			'Description': 'Normalizes position values in the background, background-position, -webkit-perspective-origin and perspective-origin properties.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeRepeatStyle',
			'Name': 'Normalize repeat style',
			'Description': 'Reduces the two value syntax for background-repeat into the single value syntax where possible, in both the property itself and the background shorthand. Also works for mask-repeat.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeString',
			'Name': 'Normalize string',
			'Description': 'Standardises the usage of double or single quoted strings. Can also remove linebreaks which are inserted for aesthetic purposes.',
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe,
			'Preset': Data.Preset.Enum.Default,
			'Configurable': true
		},
		{
			'ID': 'normalizeTimingFunctions',
			'Name': 'Normalize timing functions',
			'Description': 'Normalizes transition timing in the animation, animation-timing-function, transition and transition-timing-function properties.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeUnicode',
			'Name': 'Normalize unicode',
			'Description': 'This optimisation can convert unicode-range descriptors to use the shorter wildcard ranges when a particular value meets the wildcard criteria.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeUrl',
			'Name': 'Normalize URL',
			'Description': 'Normalizes URL strings. It can remove default ports, resolve unnecessary directory traversal & unquote the value.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'normalizeWhitespace',
			'Name': 'Normalize whitespace',
			'Description': 'Trims whitespace inside and around rules, selectors & declarations, plus removes the final semicolon inside every selector.',
			'Preset': Data.Preset.Enum.Lite,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'orderedValues',
			'Name': 'Ordered values',
			'Description': 'Properties affected by this transform can accept their arguments in an arbitrary order. This module normalizes that order, facilitating easier de-duplication.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'reduceIdents',
			'Name': 'Reduce idents',
			'Description': 'Renames at-rules such as @keyframes.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile
		},
		{
			'ID': 'reduceInitial',
			'Name': 'Reduce initial',
			'Description': 'Replaces the CSS initial keyword with the actual value, when the resulting output is smaller.',
			'Preset': Data.Preset.Enum.Advanced,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'reduceTransforms',
			'Name': 'Reduce transforms',
			'Description': 'Converts between transform functions when there is a shorthand equivalent.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'svgo',
			'Name': 'SVGO',
			'Description': 'Compresses inline SVG definitions with SVGO.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Unsafe
		},
		{
			'ID': 'uniqueSelectors',
			'Name': 'Unique selectors',
			'Description': 'Naturally sorts selectors for every rule, and removes duplicates.',
			'Preset': Data.Preset.Enum.Default,
			'SafetyLevel': Plugin.Enum_SafetyLevel.Safe
		},
		{
			'ID': 'zindex',
			'Name': 'Z-index',
			'Description': 'Rebases z-index values. This is unsafe as it could potentially clash with other stylesheets, or JavaScript injected styles. However, it is safe if your stacking context has wholly been extracted into CSS.',
			'Preset': Data.Preset.Enum.Advanced,
			'SafetyLevel': Plugin.Enum_SafetyLevel.SafeInsideOneFile
		}
	]
}