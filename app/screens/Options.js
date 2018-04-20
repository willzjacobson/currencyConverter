import React, { Component } from 'react';
import { ScrollView, StatusBar, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md'; // 'md' is prefic for android icons in Ionicons
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends Component {
  handleThemesPress = () => {
    console.log('handleThemesPress');
  };

  handleSitePress = () => {
    console.log('handleSitePress');
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="themes"
          onPress={this.handleThemesPress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              color={ICON_COLOR}
              size={ICON_SIZE}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Options;
