import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';

export default class Home extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      width: new Animated.Value(0),
      height: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(
          this.state.fadeAnim,
          {
            toValue: 1,
            duration: 1300
          }
        ),
        Animated.sequence([
          Animated.parallel([
            Animated.timing(
              this.state.width,
              {
                toValue: 320,
                duration: 1000
              }
            ),
            Animated.timing(
              this.state.height,
              {
                toValue: 128,
                duration: 1000
              }
            )
          ]),
          Animated.parallel([
            Animated.spring(
              this.state.width,
              {
                toValue: 280,
                duration: 300
              }
            ),
            Animated.spring(
              this.state.height,
              {
                toValue: 112,
                duration: 300
              }
            )
          ])
        ])
      ])
    ]).start()
    setTimeout(() => {
      this.props.navigation.navigate('Main')
    }, 1500)
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity: this.state.fadeAnim, width: this.state.width, height: this.state.height}}>
          <Image style={styles.logo} resizeMode={'contain'} source={require('../images/logo.png')} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e323e',
  },
  logo: {
    width: '100%',
    height: '100%'
  }
});
