import { Tag } from '../Entities/Tag'



export namespace Tags
{
	export const List: { [Key in Tag.Type_ID]: Tag.Interface } =
	{
		'Safe':
		{
			'ID': 'Safe',
			'ReadableName': 'Safe',
			'Description': 'Has no side effects.'
		},

		'SafeInsideOneFile':
		{
			'ID': 'SafeInsideOneFile',
			'ReadableName': 'Safe inside one file',
			'Description': 'Safe inside one file.'
		},

		'Unsafe':
		{
			'ID': 'Unsafe',
			'ReadableName': 'Unsafe',
			'Description': 'Might break your code.'
		},



		'Compression':
		{
			'ID': 'Compression',
			'ReadableName': 'Compression',
			'Description': 'Optimizes code for better GZip or Brotli compression.'
		},

		'Configurable':
		{
			'ID': 'Configurable',
			'ReadableName': 'Configurable',
			'Description': 'Configurable.'
		}
	}
}