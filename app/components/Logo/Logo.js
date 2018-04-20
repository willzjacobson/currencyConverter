import React, { Component } from 'react';
import { View, Text, Keyboard, Animated, Platform } from 'react-native';

import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
    this.logoOffset = new Animated.Value(styles.$largeLogoOffset);
  }

  componentDidMount() {
    // This is necessary because the 'will' events are not available on Android
    const showListener =
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDisShow';
    const hideListener =
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDisHide';

    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoOffset, {
        toValue: styles.$smallLogoOffset,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION,
      }),
      Animated.timing(this.logoOffset, {
        toValue: styles.$largeLogoOffset,
        duration: ANIMATION_DURATION,
      }),
    ]).start();
  };

  render() {
    const containerImageStyle = [
      styles.containerImage,
      { width: this.containerImageWidth, height: this.containerImageWidth },
    ];

    const imageStyle = [
      styles.logo,
      { width: this.imageWidth, height: this.imageWidth, top: this.logoOffset },
    ];

    return (
      <View style={styles.container}>
        <Animated.Image
          resizeMode="contain"
          style={containerImageStyle}
          source={require('./images/background.png')}
        />
        <Animated.Image
          resizeMode="contain"
          style={imageStyle}
          source={require('./images/logo.png')}
        />
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
