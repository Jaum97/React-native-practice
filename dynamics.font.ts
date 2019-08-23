import { Platform, } from 'react-native'

const IOSFonts = {
	light: 'HelveticaNeue-Light',
	normal: 'Helvetica Neue',
	medium:'HelveticaNeue-Medium',
	bold: 'HelveticaNeue-Bold',
}

const AndroidFonts = {
	light: 'HelveticaNeue-Light',
	normal: 'Helvetica Neue',
	medium:'HelveticaNeue-Medium',
	bold: 'HelveticaNeue-Bold',
}

export default Platform.OS === 'ios' ? IOSFonts : AndroidFonts
