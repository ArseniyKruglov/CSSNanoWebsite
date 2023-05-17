import * as InputWithIconElement from '../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/InputWithIcon/Script'
import * as IconElement from './Icon/Script'
import * as SelectElement from './Select/Script'



export function Get()
{
	return InputWithIconElement.Get
	({
		'Icon': IconElement.Get(),
		'Input': SelectElement.Get()
	})
}