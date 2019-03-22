import React,{ Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.containerTop}>
                    <Image source={require('../assets/images/user.png')} style={styles.image}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userTitle}>超萌的蒙面超人</Text>
                        <Text style={styles.userDesc}>简介：脑壳疼</Text>
                    </View>
                </View>
                <View style={styles.containerData}>
                    <View style={styles.item}>
                        <Text style={styles.number}>72</Text>
                        <Text style={styles.item1}>微博</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.number}>34</Text>
                        <Text style={styles.item1}>关注</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.number}>23</Text>
                        <Text style={styles.item1}>粉丝</Text>
                    </View>
                </View>
            </View>
        )
    }
}
export default UserInfo;
const styles = StyleSheet.create({
    // 用户头像相关信息
    containerTop: {
        flexDirection: 'row',
        padding: 10,
        // justifyContent: 'space-around',
        // alignItems: 'baseline'
        borderBottomWidth: 1,
        borderBottomColor: '#eee',


    },
    image: {
        width:80,
        height:80,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        marginRight:10
    },
    userInfo: {
        // flex: 2,
        marginTop: 10,
        height:40
    },
    userTitle: {
        fontWeight: 'bold',
        fontSize:14
    },
    userDesc: {
        fontSize:14,
        color: '#666'
    },

    //用户其他的相关信息 微博数、粉丝、关注
    containerData: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 10,
        borderBottomColor: '#eee'
    },
    item: {
        justifyContent:'center',
        alignItems:'center'
    },
    item1: {
        color:'#666'
    }
    
})