import { BaseElement } from '../../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import * as Chip from '../../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Chip/Script'
import * as Tag from '../../../../../../../../Model/Entities/Tag'
import * as TagExplanationDialog from '../../../../../../TagExplanation/Script'



export function Get(Tag: Tag.Interface): HTMLLIElement
{
	return <HTMLLIElement> BaseElement
	({
		'MyElement': Chip.Get
		({
			'Text': Tag.ReadableName,
			'Pill': true
		}),
		'ClassNames': [Tag.ID],
		'Modifications': (Element) =>
		{
			Element.addEventListener('click', () => { TagExplanationDialog.Open(Tag) })
		}
	})
}