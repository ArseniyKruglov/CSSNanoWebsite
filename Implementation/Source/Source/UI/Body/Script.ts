import * as HeaderElement from './Header/Script'
import * as MainElement from './Main/Script'



export async function Draw(): Promise<void>
{
	document.body.id = 'Root'
	document.body.append(HeaderElement.Get(), MainElement.Get())
}