import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Image Width is half of devide width
const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  $largeContainerSize: imageWidth,
  $largeImageSize: imageWidth / 2,
  $largeLogoOffset: imageWidth / 4,
  $smallContainerSize: imageWidth / 2,
  $smallImageSize: imageWidth / 4,
  $smallLogoOffset: imageWidth / 8,
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '$largeContainerSize',
    height: '$largeContainerSize',
  },
  logo: {
    position: 'absolute',
    width: '$largeImageSize',
    top: '$largeLogoOffset',
  },
  text: {
    fontSize: 28,
    color: '$white',
    letterSpacing: -0.5,
    fontWeight: '600',
    marginTop: 15,
  },
});
