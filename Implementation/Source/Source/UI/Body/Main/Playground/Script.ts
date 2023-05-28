import { BaseElement } from '../../../../../../../../Library/Code/Frontend/Source/BaseElement'
import { Arrow } from './Arrow/Script'
import { Code } from './Code/Script'



export namespace Playground
{
	export function Get(): HTMLDivElement
	{
		return <HTMLDivElement> BaseElement.Create
		({
			'_HTMLTag': 'Div',
			'_ClassNames': ['Playground'],
			'_Children':
			[
				Code.Get
				({
					'_Code':
`/* Normalize selectors */
h1::before, h1:before
{
	/* Reduce shorthand even further */
	margin: 10px 20px 10px 20px;

	/* Reduce color values */
	color: #FF0000;

	/* Remove duplicated properties */
	font-weight: 400;
	font-weight: 400;

	/* Reduce position values */
	background-position: bottom right;

	/* Normalize wrapping quotes */
	quotes: '«' "»";

	/* Reduce gradient parameters */
	background: linear-gradient(to bottom, #FFE500 0%, #FFE500 50%, #112211 50%, #112211 100%);

	/* Replace initial values */
	min-width: initial;
}

/* Correct invalid placement */
@charset "UTF-8";`
				}),
				Arrow.Get(),
				Code.Get
				({
					'_Code': '@charset "utf-8";h1:before{margin:10px 20px;color:red;font-weight:400;background-position:100% 100%;quotes:"«" "»";background:linear-gradient(180deg,#ffe500,#ffe500 50%,#121 0,#121);min-width:0}'
				})
			]
		})
	}
}