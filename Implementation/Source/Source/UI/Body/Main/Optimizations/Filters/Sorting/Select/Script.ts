import { Select } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Select/Script'



export function Get(): ReturnType<typeof Select.Get>
{
	return Select.Get
	({
		'Options':
		[
			{
				'_Text': 'Alpabetical'
			},
			{
				'_Text': 'Tags'
			}
		]
	})
}