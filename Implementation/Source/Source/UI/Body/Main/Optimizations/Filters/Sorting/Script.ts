import { InputWithIcon } from '../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/InputWithIcon/Script'
import * as IconElement from './Icon/Script'
import * as SelectElement from './Select/Script'



export function Get()
{
	return InputWithIcon.Get
	({
		'Icon': IconElement.Get(),
		'Input': SelectElement.Get()
	})
}