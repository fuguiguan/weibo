import  React,{ Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'
const { width,height } = Dimensions.get('window')
class Item extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View style={{width:width,height:height}}>
                <View style={styles.containerUser}>
                    <Image style={styles.image}source={require('../assets/images/user.png')}/>
                    <View style={styles.userInfo}>
                        <Text>发布者昵称</Text>
                        <Text>发布者相关信息</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.description}>日日重复同样的事遵循着与昨日相同的惯例若能避开猛烈的欢喜自然不会有悲痛的来袭 ​​​​</Text>
                    <Image source={require('../assets/images/show.png')}></Image>
                </View>
                <View style={styles.operate}>
                    <View style={[styles.forward,styles.icon]}>
                        <Image source={require('../assets/images/forward_16.png')}/>
                        <Text style={styles.font}>转发</Text>
                    </View>
                    <View style={[styles.comment,styles.icon]}>
                        <Image source={require('../assets/images/comment_16.png')}/>
                        <Text style={styles.font}>评论</Text>
                    </View>
                    <View style={[styles.like,styles.icon]}>
                        <Image source={require('../assets/images/like_16.png')}/>
                        <Text style={styles.font}>点赞</Text>
                    </View>
                </View>
            </View>  
        )
    }
}
export default Item;

const styles = StyleSheet.create({
    containerUser: {
        padding: 10,
        flexDirection: 'row'
    },
    image: {
        width:60,
        height:60,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    userInfo: {

    },
    content: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    description: {
        marginBottom:6,
    },
    operate: { //转发、评论、点赞
        padding: 10,
        flexDirection: 'row',
        // marginLeft: 10,
        // marginRight: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 10,
        borderBottomColor: '#eee'
    },
    icon: {
        flexDirection: 'row',
        flex: 1,
        width: 16,
        height: 16
    },
    font: {
        marginLeft: 6,
        lineHeight: 16,
    },
    forward: {
        alignSelf: 'center',
    },
    comment: {
        alignSelf: 'center',
    },
    like: {
        alignSelf: 'center',
    }

})