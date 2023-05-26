import { BottomNavigation } from './BottomNavigation/Script'
import { Header } from './Header/Script'
import { Main } from './Main/Script'



export function Draw(): void
{
	document.body.id = 'Root'
	document.body.append
	(
		Header.Get(),
		Main.Get(),
		BottomNavigation.Get()
	)
}