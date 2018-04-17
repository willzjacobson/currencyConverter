import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

// Image Width is half of devide width
const imageWidth = Dimensions.get('window').width / 2;

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerImage: {
    alignItems: 'center',
    justifyContent: 'center',
    width: imageWidth,
    height: imageWidth,
  },
  image: {
    width: imageWidth / 2,
  },
  text: {
    fontSize: 28,
    color: '$white',
    letterSpacing: -0.5,
    fontWeight: '600',
    marginTop: 15,
  },
});
