import { Body } from './Body/Script'
import './Style.scss'



export namespace UI
{
	export function Draw(): void
	{
		document.documentElement.lang = 'en'

		Body.Draw()
	}
}