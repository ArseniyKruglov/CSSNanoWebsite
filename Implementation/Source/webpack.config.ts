import * as WebpackConfig from '../../../Library/Tools/Webpack/Source/GetWebpackConfig'



export default WebpackConfig.Get
({
	'Mode': WebpackConfig.Enum_Mode.Development,
	'Source':
	{
		'Directory': __dirname,
		'Entry': './Source/Main.ts',
		'FaviconPath': './Source/Favicon.svg'
	},
	'Output':
	{
		'Directory':
		{
			'Development': '../Webpage/',
			'Production': '../Webpage/'
		}
	},
	'RootURL':
	{
		'Development': '/Implementation/Webpage/',
		'Production': '/'
	},
	'Info':
	{
		'AppName': 'CSS Nano'
	}
})