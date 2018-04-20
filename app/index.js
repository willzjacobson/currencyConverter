import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';

EStyleSheet.build({
  $primaryBlue: '#4f6d7a',
  $primaryOrange: '#d57a66',
  $primaryGreen: '#00bd9d',
  $primaryPurple: '#9e768f',

  $border: '#E2E2E2',
  $darkText: '#343434',
  $inputText: '#797979',
  $lightGray: '#f0f0f0',
  $white: '#ffffff',
});

export default () => <Navigator />;
