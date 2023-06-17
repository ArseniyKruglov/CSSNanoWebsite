import { WebpackConfigGenerator } from '../../../Library/Tools/Webpack/Source/GetWebpackConfig'



export default WebpackConfigGenerator.Get
({
	'Mode': WebpackConfigGenerator.Enum_Mode.Development,
	'Source':
	{
		'Folder': __dirname,
		'EntryFile': './Source/Main.ts',
		'Favicon': './Source/UI/Favicon.svg'
	},
	'Output':
	{
		'Folder':
		{
			'Development': '../Webpage/',
			'Production': '../Webpage/'
		},
		'URL':
		{
			'Development': '/Implementation/Webpage/',
			'Production': '/'
		}
	},
	'Metadata':
	{
		'Name': 'CSS Nano',
		'Description': 'CSS Nano is a modern, modular compression tool written on top of the PostCSS ecosystem.',
		'Keywords': [],
		'Authors': ['Arseniy Kruglov']
	}
})