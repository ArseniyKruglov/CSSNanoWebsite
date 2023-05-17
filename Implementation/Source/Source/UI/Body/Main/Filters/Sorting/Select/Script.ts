import * as SelectElement from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Select/Script'



export function Get(): ReturnType<typeof SelectElement['Get']>
{
	return SelectElement.Get
	({
		'Options':
		[
			{
				'Text': 'Alpabetical'
			},
			{
				'Text': 'Tags'
			}
		]
	})
}