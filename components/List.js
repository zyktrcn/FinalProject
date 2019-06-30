import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import ListItem from './ListItem'


type Props = {};
export default class List extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          pic: require('../images/new1.jpg'),
          title: '网络技术与应用',
          video: 'https://jdvodrvfb210d.vod.126.net/mooc-video/nos/mp4/2016/06/06/1004480095_c523ea97c282495f876a20cadc0d9c63_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de80f3c29ed3f1496c4c12cbae0c7b2e4bb93d1287a7ebb04c0c23c4c29240289623059f726dc7bb86b92adbc3d5b34b132f1ea5c302e25087f1c9637a5c7414264aabef62f6a5b7f74a41ca7132f31ab87',
          introduction: '本课程已经在中国大学MOOC开课9次，学生通过学习收获了知识，我们通过课程论坛和QQ群认真答疑，使得我们对课程也有了更深入的理解，真正做到了教学相长。我们也根据大家的反馈对课程进行了改进，本课程入选了教育部评选的第一批国家级精品在线开放课程以及中国高校计算机教育MOOC联盟评选的优秀课程。',
          teachers: [
            {
              name: '杨庚',
              pic: require('../images/yg.jpg')
            },
            {
              name: '胡素君',
              pic: require('../images/hsj.jpg')
            },
            {
              name: '李鹏',
              pic: require('../images/lp.jpg')
            },
            {
              name: '成卫青',
              pic: require('../images/cwq.jpeg')
            },
            {
              name: '王雪梅',
              pic: require('../images/wxm.jpeg')
            },
            {
              name: '刘尚东',
              pic: require('../images/lsd.jpg')
            }
          ]
        },
        {
          pic: require('../images/new2.jpg'),
          title: 'C语言程序设计CAP',
          video: 'https://jdvodrvfb210d.vod.126.net/mooc-video/nos/mp4/2016/05/30/1004453120_091a5957fea44a658250efb45dd2fdca_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de80f3c29ed3f1496c4c12cbae0c7b2e4bb19af49a6d8bc47d93da9e668bdddf7943059f726dc7bb86b92adbc3d5b34b1323b74704bcbb9802cd655bfee8d639fc0df69454fe54d63664bd5297860cdfa3d',
          introduction: 'C语言是古老而长青的编程语言，它具备了现代程序设计的基础要求，它的语法是很多其他编程语言的基础，在系统程序、嵌入式系统等领域依然是无可替代的编程语言，在各类编程语言排行榜上常年占据前两名的位置。 本课程是计算机专业的数据结构、汇编语言、操作系统、编译原理、体系结构等课程的基石。',
          teachers: [
            {
              name: '翁恺',
              pic: require('../images/wk.jpg')
            }
          ]
        },
        {
          pic: require('../images/new3.png'),
          title: 'JAVA程序设计',
          video: 'https://jdvodrvfb210d.vod.126.net/jdvodrvfb210d/nos/mp4/2019/06/12/1214762179_b9f6e2c2b8d1410591b68c882e9da939_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de80f3c29ed3f1496c4c12cbae0c7b2e4bb70b95146f3babf77524656f744a757233059f726dc7bb86b92adbc3d5b34b132ad493d6642d9b00d8861b74e5de8029cb108680c195ae7aedbefcbd824e55924',
          introduction: '本课程从基础语法学习开始学习JAVA编程，通过面向对象编程、抽象类与接口、文件操作、泛型集合、多线程和注解等Java语言的基础知识，逐步深入JDBC编程、分层架构等核心编程技术，详细探讨Java提供的各种软件开发技术和特性。本课程设置了五个综合案例，将案例从易到难逐步分解，最终完成整个案例。',
          teachers: [
            {
              name: '马瑞新',
              pic: require('../images/mrx.jpg')
            },
            {
              name: '徐秀娟',
              pic: require('../images/xxj.png')
            }
          ]
        },
        {
          pic: require('../images/new4.jpg'),
          title: '人工智能实践：Tensorflow笔记',
          video: 'https://jdvodrvfb210d.vod.126.net/mooc-video/nos/mp4/2018/01/27/1008455025_785abf4287524a2fa01336f43ce3f977_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de80f3c29ed3f1496c4c12cbae0c7b2e4bbe243bf70d21f63a97744253e28b969873059f726dc7bb86b92adbc3d5b34b1329daef37846ea464881c592adc76a32cfaabef62f6a5b7f74a41ca7132f31ab87',
          introduction: '这是人工智能入门课，将用八次课帮你梳理人工智能概念、机器学习方法、深度学习框架。如果你还不知道什么是人工智能、机器学习、深度学习，欢迎进来学习交流。结课时，你将会用Python搭建人工神经网络，实现特定物体的识别。一起编码感受人工智能 机器学习 深度学习吧！',
          teachers: [
            {
              name: '曹健',
              pic: require('../images/cj.jpg')
            }
          ]
        },
        {
          pic: require('../images/old1.jpg'),
          title: '基础俄语II',
          video: 'https://jdvodrvfb210d.vod.126.net/jdvodrvfb210d/nos/mp4/2019/05/22/1214705154_5e9d9b3ed068439e8beee5660c17dc83_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de868ac01a9061a56814034ec7520e065a05c9ea8443db5e787c9f0a78f3312d9a53059f726dc7bb86b92adbc3d5b34b132319531c4f46393d11361bd4dec515cf8b8ae77e29788836745b7125f174b3914',
          introduction: '亲爱的同学们， 大家好！我是刘淼老师。我为大家带来的是基础俄语2的网络课程。在这门课中，大家会学到与对话和课文相关的词汇语法知识，我们会为大家呈现清晰的语言知识梳理，大家也可以和一起进行言语训练，通过表格和图片发展自己的言语技能。希望通过我们的课程，能够让大家爱上慕课，爱上俄语！',
          teachers: [
            {
              name: '刘淼',
              pic: require('../images/lm.jpeg')
            }
          ]
        },
        {
          pic: require('../images/old2.jpg'),
          title: '国际学术交流英语',
          video: 'https://jdvodrvfb210d.vod.126.net/jdvodrvfb210d/nos/mp4/2019/04/09/1214528584_19cb442d54864d0f95369f4d0ef64808_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de868ac01a9061a56814034ec7520e065a0ca81a90623a9471d3d97510254ed3c9c3059f726dc7bb86b92adbc3d5b34b1324fcf55d0763c287932f985619b5ddd9ab8ae77e29788836745b7125f174b3914',
          introduction: '准备到国外学术交流，申请信、个人陈述和学术简历让你手足无措？投稿信、邀请信、论文摘要常常使你压力山大？怎样做一场优秀的英文演讲？如何应对提问环节棘手的问题？加入我们的课程，学习国际学术交流的基本知识，掌握地道规范的英文表达方式，助力你在国际学术交流的舞台上自信优雅，游刃有余。',
          teachers: [
            {
              name: '梁晓君',
              pic: require('../images/lxj.jpg')
            }
          ]
        },
        {
          pic: require('../images/old3.jpg'),
          title: '国际学术交流英语',
          video: 'https://jdvodrvfb210d.vod.126.net/jdvodrvfb210d/nos/mp4/2018/11/23/1010782382_3505bf3f2ca0400b874b68a5b577e177_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de868ac01a9061a56814034ec7520e065a0929fafef28e9809b87fa7967be3371223059f726dc7bb86b92adbc3d5b34b132ced46b6196d9c2ae698fe8bf7deb687d4426afeac364f76a817da3b2623cd41e',
          introduction: '系统的演讲训练不仅有助于增强一个人的表达能力，更有利于其开拓思路、增强信心，提高沟通技巧，以及培养文化、文学、科技等领域的批判性思维。在注重交流、合作与效率的当今社会，这是一位高素质人才所应具备的重要能力。我们在这里等你，不见不散！',
          teachers: [
            {
              name: '江桂英',
              pic: require('../images/jgy.jpg')
            },
            {
              name: '李素英',
              pic: require('../images/lsy.jpg')
            },
            {
              name: '刘岩',
              pic: require('../images/ly.jpeg')
            },
            {
              name: '杨琨',
              pic: require('../images/yk.png')
            }
          ]
        },
        {
          pic: require('../images/old4.png'),
          title: '医学英语翻译',
          video: 'https://jdvodrvfb210d.vod.126.net/jdvodrvfb210d/nos/mp4/2019/05/13/1214667537_cd66b7dac6c64d3fad0e7bedde90e87c_hd.mp4?ak=7909bff134372bffca53cdc2c17adc27a4c38c6336120510aea1ae1790819de868ac01a9061a56814034ec7520e065a037ab6645d54703d1370fbe04f8ab588f3059f726dc7bb86b92adbc3d5b34b132f6e25aedbca7752b40eec22c6ac2a4bbb108680c195ae7aedbefcbd824e55924',
          introduction: '西安交通大学外国语学院的医学英语是国内首屈一指的学科方向，有着坚厚的学科基础和卓越的研究成果。医学翻译授课团队的成员主持或参与了多部大型医学词典的编撰以及国外原版医学教材的翻译工作，还讲授多门医学英语相关课程。团队成员均丰富的医学英语教学和翻译实践经验是这门课程成功开设的保障。',
          teachers: [
            {
              name: '朱元',
              pic: require('../images/zy.jpg')
            },
            {
              name: '楚建伟',
              pic: require('../images/cjw.jpg')
            },
            {
              name: '詹菊红',
              pic: require('../images/zjh.jpg')
            }
          ]
        }
      ]
    }
  }
  static navigationOptions = {
    tarBarLabel: 'List',
    tabBarIcon: () => {
      return <Image style={styles.tabBarIcon} source={require('../images/symbols.png')} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {
            this.state.list.map((item) => {
              return (<ListItem item={item} navigation={this.props.navigation} />)
            })
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarIcon: {
    width: 21,
    height: 21
  }
});
