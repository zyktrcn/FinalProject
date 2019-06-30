import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';

export default class ListItem extends Component<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container} onPress={ () => { this.props.navigation.navigate('Detail', { item: this.props.item }) } }>
        <View style={styles.img}>
          <Image style={{ width: '100%', height: 200 }} source={this.props.item.pic} />
        </View>
        <Text style={styles.title}>{this.props.item.title}</Text>
        <Text style={styles.teachers}>
          {
            this.props.item.teachers.map((teacher) => {
              return teacher.name + ' '
            })
          }
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 250,
    marginTop: 10,
    marginBottom: 10,
  },
  img: {
    width: '100%'
  },
  title: {
    margin: 10,
    marginTop: 5,
    marginBottom: 0,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  teachers: {
    margin: 10,
    marginTop: 5,
    marginBottom: 0,
    fontSize: 16
  }
});
