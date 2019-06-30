import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class Item extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={ () => { this.props.navigation.navigate('Detail', { item: this.props.item }) } }>
        <View style={styles.img}>
          <Image style={{ width: '100%' }} source={this.props.item.pic} />
        </View>
        <Text style={styles.title}>{this.props.item.title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '2%',
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: '100%'
  },
  title: {
    marginTop: 5,
    fontSize: 16,
    color: 'black'
  }
});
