import * as WebpackConfigGenerator from '../../../Library/Tools/Webpack/Source/GetWebpackConfig'



export default WebpackConfigGenerator.Get
({
	'Mode': WebpackConfigGenerator.Enum_Mode.Development,
	'Source':
	{
		'RootDirectory': __dirname,
		'Entry': './Source/Main.ts',
		'Favicon': './Source/Favicon.svg'
	},
	'Output':
	{
		'Directory':
		{
			'Development': '../Webpage/',
			'Production': '../Webpage/'
		},
		'RootURL':
		{
			'Development': '/Implementation/Webpage/',
			'Production': '/'
		},
	},
	'Info':
	{
		'Name': 'CSS Nano',
		'Description': 'CSS Nano is a modern, modular compression tool written on top of the PostCSS ecosystem.',
		'Authors': ['Arseniy Kruglov']
	}
})