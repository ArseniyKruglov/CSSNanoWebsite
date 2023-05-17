import * as Tag from '../Entities/Tag'



export const List: Tag.Interface[] =
[
	{
		'ID': 'Safe',
		'ReadableName': 'Safe',
		'Description': 'Has no side effects'
	},
	{
		'ID': 'Unsafe',
		'ReadableName': 'Unsafe',
		'Description': 'Might break your code'
	},
	{
		'ID': 'Compression',
		'ReadableName': 'Compression',
		'Description': 'Optimizes code for better GZip or Brotli compression'
	},
	{
		'ID': 'SafeInsideOneFile',
		'ReadableName': 'Safe inside one file',
		'Description': 'Safe inside one file'
	}
]