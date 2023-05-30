import { BaseElement } from '../../../../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { LibraryElement_Link } from '../../../../../../../../../../../Library/Code/Frontend/Source/Elements/Elements/Link/Script'
import { Entities } from '../../../../../../../Main'
import { Element_PluginDetails } from '../../../../../PluginDetails/Script'
import { Description } from './Description/Script'
import { Name } from './Name/Script'
import { Tags } from './Tags/Script'



export namespace Element_Plugin
{
	export function Get(Plugin: Entities.Plugin.Interface): ReturnType<typeof LibraryElement_Link.Get>
	{
		return <ReturnType<typeof LibraryElement_Link.Get>> BaseElement.Create
		({
			'Element': LibraryElement_Link.Get(Plugin.ID),
			'Children':
			[
				Name.Get(Plugin.ReadableName),
				Description.Get(Plugin.Description),
				Tags.Get({ 'Tags': Plugin.Tags })
			],
			'Modifications': (Element) =>
			{
				Element.addEventListener('click', (Event) =>
				{
					Event.preventDefault()

					ShowDetails(Plugin)
				})
			}
		})
	}
}



function ShowDetails(Plugin: Entities.Plugin.Interface): void
{
	document.body.appendChild(Element_PluginDetails.Get(Plugin))
}