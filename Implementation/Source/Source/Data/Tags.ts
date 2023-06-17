import { Tag } from '../Entities/Tag'



export namespace Tags
{
	export const List: { [Key in Tag.Type_ID]: Tag.Interface } =
	{
		'Safe':
		{
			'ID': 'Safe',
			'Name': 'Safe',
			'Description': 'Has no side effects.'
		},

		'SafeInsideOneFile':
		{
			'ID': 'SafeInsideOneFile',
			'Name': 'Safe inside one file',
			'Description': 'Safe inside one file.'
		},

		'Unsafe':
		{
			'ID': 'Unsafe',
			'Name': 'Unsafe',
			'Description': 'Might break your code.'
		},



		'Compression':
		{
			'ID': 'Compression',
			'Name': 'Compression',
			'Description': 'Optimizes code for better GZip or Brotli compression.'
		},

		'Configurable':
		{
			'ID': 'Configurable',
			'Name': 'Configurable',
			'Description': 'Configurable.'
		}
	}
}