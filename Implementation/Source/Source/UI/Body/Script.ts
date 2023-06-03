import { Element_BottomNavigation } from './BottomNavigation/Script'
import { Element_Header } from './Header/Script'
import { Element_Main } from './Main/Script'



export namespace Body
{
	export function Draw(): void
	{
		document.body.id = 'Root'

		document.body.append
		(
			Element_Header.Get(),
			Element_BottomNavigation.Get(),
			Element_Main.Get(),
		)
	}
}