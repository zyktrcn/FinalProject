import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';
import Video from 'react-native-video'

export default class Item extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.navigation.state.params.item
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.img}>
            <Video
              ref={(ref: Video) => {
                  this.video = ref
              }}
              source={{ uri: this.state.item.video }}
              style={{ width: '100%', height: 200 }}
            />
          </View>
          <Text style={styles.title}>{this.state.item.title}</Text>
          <Text style={styles.introduction}>{this.state.item.introduction}</Text>
          <View style={styles.teachers}>
            {
              this.state.item.teachers.map((el, index) => {
                if (index < 3) {
                  return (
                    <View style={styles.item}>
                      <Image style={{ width: 100, height: 100, borderRadius: 50, }} source={el.pic} />
                      <Text style={{ fontSize: 16, margin: 5, textAlign: 'center' }}>{el.name}</Text>
                    </View>
                  )
                }
              })
            }
          </View>
          <View style={styles.teachers}>
            {
              this.state.item.teachers.map((el, index) => {
                if (index > 2) {
                  return (
                    <View style={styles.item}>
                      <Image style={{ width: 100, height: 100, borderRadius: 50, }} source={el.pic} />
                      <Text style={{ fontSize: 16, margin: 5, textAlign: 'center' }}>{el.name}</Text>
                    </View>
                  )
                }
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  img: {
    width: '100%',
    height: 200
  },
  title: {
    margin: 10,
    marginBottom: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  introduction: {
    margin: 10,
    marginBottom: 0,
    paddingBottom: 10,
    fontSize: 16,
    textAlign: 'justify',
    lineHeight: 24,
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: 'grey'
  },
  teachers: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    margin: 10,
  },
  item: {
    width: '31.3%',
    margin: '1%',
    marginTop: 10,
    marginBottom: 10,
    marginBottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
