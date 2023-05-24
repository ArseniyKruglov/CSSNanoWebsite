import * as BottomNavigationElement from './BottomNavigation/Script'
import * as HeaderElement from './Header/Script'
import * as MainElement from './Main/Script'



export function Draw(): void
{
	document.body.id = 'Root'
	document.body.append
	(
		HeaderElement.Get(),
		MainElement.Get(),
		BottomNavigationElement.Get()
	)
}