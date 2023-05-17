import * as DialogElement from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Dialog/Script'
import * as ParagraphElement from '../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Paragraph/Script'
import * as Model from '../../../Model/Namespace'
import * as HeadingElement from './Heading/Script'



export function Open(Tag: Model.Entities.Tag.Interface): void
{
	const Dialog: ReturnType<typeof DialogElement['Get']> = DialogElement.Get()

	Dialog.append
	(
		HeadingElement.Get(Tag.ReadableName),
		ParagraphElement.Get
		({
			'Text': Tag.Description
		})
	)

	document.body.append(Dialog)
	Dialog.showModal()
}