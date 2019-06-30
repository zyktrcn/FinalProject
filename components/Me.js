import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


type Props = {};
export default class Me extends Component<Props> {
  static navigationOptions = {
    tarBarLabel: 'Me',
    tabBarIcon: () => {
      return <Image style={styles.tabBarIcon} source={require('../images/me.png')} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
          <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../images/user.png')} />
          <View style={{ marginLeft: 40 }}>
            <Text style={styles.name}>刘杰容</Text>
            <Text style={styles.des}>2111806004</Text>
            <Text style={styles.des}>计算机科学与网络工程学院</Text>
            <Text style={styles.des}>2018级教育技术学</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabBarIcon: {
    width: 21,
    height: 21
  },
  info: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 20,
    padding: 20,
    backgroundColor: 'white'
  },
  name: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  des: {
    fontSize: 16,
    marginTop: 5
  }
});
