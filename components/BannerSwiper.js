import React, {Component} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper'


const { width, height } = Dimensions.get('window')

export default class BannerSwiper extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Swiper
             style={styles.wrapper}
             height={width * 40/75}
             showsButtons={false}
             removeClippedSubviews={false} //这个很主要啊，解决白屏问题
             autoplay={true}
             horizontal ={true}
             paginationStyle={styles.paginationStyle}
             dotStyle={styles.dotStyle}
             activeDotStyle={styles.activeDotStyle}
        >
            <Image source={require('../images/swiper1.jpg')} style={styles.bannerImg} />
            <Image source={require('../images/swiper2.jpg')} style={styles.bannerImg} />
            <Image source={require('../images/swiper3.jpg')} style={styles.bannerImg} />
            <Image source={require('../images/swiper4.jpg')} style={styles.bannerImg} />
            <Image source={require('../images/swiper5.jpg')} style={styles.bannerImg} />


        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: width * 40/75,
    backgroundColor: '#F5FCFF',
  },
  wrapper: {
    width: width,
    height: width * 40/75
  },
  paginationStyle: {
    bottom: 20,
  },
  dotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    opacity: 0.4,
    borderRadius: 0,
  },
  activeDotStyle: {
    width: 22,
    height: 3,
    backgroundColor: '#fff',
    borderRadius: 0,
  },
  bannerImg: {
    width: '100%'
  }
});
