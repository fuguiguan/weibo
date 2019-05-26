import React,{ Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import NavigationService from '../../navigations/NavigationService'
import getCommentAtMeMeAction from '../../actions/getCommentAtMeAction'
import getCommentAboutMeAction from '../../actions/CommentMsgAction'
class Message extends Component {
    constructor(props) {
        super(props)
        this.goCommentMsg = this.goCommentMsg.bind(this)
        this.goCommentAtMe = this.goCommentAtMe.bind(this)
    }
    static navigationOptions = {
        tabBarlabel: '消息',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.item} onPress={this.goCommentAtMe}>
                    <View style={styles.itemLeft}>
                        <Image style={styles.imgLeft} source={require('../../assets/images/message/aite.png')}/>
                        <Text>@我的</Text>
                    </View>
                    <Image style={styles.imgRight} source={require('../../assets/images/message/dayu.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item} onPress={this.goCommentMsg}>
                    <View style={styles.itemLeft}>
                        <Image style={styles.imgLeft} source={require('../../assets/images/message/comment.png')}/>
                        <Text>评论</Text>
                    </View>
                    <Image style={styles.imgRight} source={require('../../assets/images/message/dayu.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Image style={styles.imgLeft} source={require('../../assets/images/message/like.png')}/>
                        <Text>赞</Text>
                    </View>
                    <Image style={styles.imgRight} source={require('../../assets/images/message/dayu.png')}/>
                </TouchableOpacity>
            </View>
        );
    }

    goCommentAtMe() {
        this.props.getCommentAtMe(1,50)
        NavigationService.navigate('CommentAtMe')
        console.log('goCommentAtMe')
    }

    goCommentMsg() {
        this.props.getCommentMsg(1,50)
        NavigationService.navigate('CommentMsg')
        console.log(this.desc)
    }

}
class MsgHeader extends Component{
    render() {
        return(
            <View style={styles.headerContainer}>
                {/* <Image source={require('../../assets/images/camaro.png')} style={headStyle.img}/> */}
                <Text style={styles.headerText}>消息</Text>
                {/* <Image source={require('../../assets/images/plus.png')} style={headStyle.img}/> */}
            </View>
        )
    }
}

Message.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <MsgHeader />
    }
}

const mapStateToProps = state => {
    return {
        desc: 'fgfg'
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCommentMsg: (page,count) => dispatch(getCommentAboutMeAction(page,count)),
        getCommentAtMe: (page,count) => dispatch(getCommentAtMeMeAction(page,count))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Message);

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 20,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10
    },
    imgRight: {
        position:'absolute',
        width: 18,
        height: 18,
        right: 5
    },
    imgLeft: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center'
    }
})