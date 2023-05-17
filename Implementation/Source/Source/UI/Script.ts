import * as TransitionsOnThemeChanging from '../../../../../Library/Code/Frontend/Source/TransitionsOnThemeChanging/Script'
import * as BodyElement from './Body/Script'



export function Draw(): void
{
	document.documentElement.lang = 'en'

	BodyElement.Draw()

	TransitionsOnThemeChanging.Disable()
}