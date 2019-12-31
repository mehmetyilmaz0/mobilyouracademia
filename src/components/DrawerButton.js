import React, { Component } from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class DrawerButton extends Component {
    _toogleMenu = () => {
      this.props.navigation.toggleDrawer();
    };

  render() {
    return (
      <TouchableOpacity
          onPress={this._toogleMenu}
          style={styles.buttonContainer}>
          <Ionicons
            name='ios-menu'
            size={30}
          />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 20
    }
});
