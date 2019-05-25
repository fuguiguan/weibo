import React,{ Component } from 'react'
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    Button, 
    TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { getUserInfo } from '../../api/index'
import NavigationService from '../../navigations/NavigationService'

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.clickItem = this.clickItem.bind(this)
        this.logout = this.logout.bind(this)
        this.goMyWeibo = this.goMyWeibo.bind(this)
    }

    componentDidMount() {

    }

    render() {
        return(
            <View style={{flexDirection:'column'}}>
                <View style={styles.containerTop}>
                    <Image source={{uri: this.props.userInfo.profile_image_url}} style={styles.image}/>
                    <View style={styles.userInfo}>
                        <Text style={styles.userTitle}>{this.props.userInfo.screen_name}</Text>
                        <Text style={styles.userDesc}>简介：{this.props.userInfo.description}</Text>
                    </View>
                </View>
                <View style={styles.containerData}>
                    <TouchableOpacity style={styles.item} onPress={this.goMyWeibo}>
                        <Text style={styles.number}>{this.props.userInfo.statuses_count}</Text>
                        <Text style={styles.item1}>微博</Text>
                    </TouchableOpacity>
                    <View style={styles.item}>
                        <Text style={styles.number}>{this.props.userInfo.friends_count}</Text>
                        <Text style={styles.item1}>关注</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.number}>{this.props.userInfo.followers_count}</Text>
                        <Text style={styles.item1}>粉丝</Text>
                    </View>
                </View>
                <View style={styles.items}>
                    <View style={styles.itemTop}>
                        <TouchableOpacity style={[styles.myAlbum,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/album.png')}/>
                            <Text>我的相册</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.myStory,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/story.png')}/>
                            <Text>我的故事</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.myLike,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/like.png')}/>
                            <Text>我的赞</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.fans,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/fans.png')}/>
                            <Text>粉丝服务</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.itemBottom}>
                        <TouchableOpacity style={[styles.wallet,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/wallet.png')}/>
                            <Text>微博钱包</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.optimal,,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/optimal.png')}/>
                            <Text>微博优选</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.headline,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/headline.png')}/>
                            <Text>粉丝头条</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.service,styles.item]} onPress={this.clickItem}>
                            <Image style={styles.itemImg} source={require('../../assets/images/mine/service.png')}/>
                            <Text>客服中心</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View><Button title='退出当前帐号' color='red' onPress={this.logout}/></View>
            </View>
        )
    }

    clickItem() {
        alert('微博暂未开通此权限...')
    }
    logout() {
        // alert(this.props)
        console.log(this.props)
        NavigationService.navigate('NotLoginStack')
        // this.props.navigation.navigate('Mine_Nologin')
    }
    goMyWeibo() {
        NavigationService.navigate('MyWeiBo')
    }
}

const mapStatetoProps = state => {
    return {
        userInfo: state.loginReducer.userInfo
    }
}

class UserHeader extends Component{
    render() {
        return(
            <View style={styles.headerContainer}>
                {/* <Image source={require('../../assets/images/camaro.png')} style={headStyle.img}/> */}
                <Text style={styles.headerText}>我</Text>
                {/* <Image source={require('../../assets/images/plus.png')} style={headStyle.img}/> */}
            </View>
        )
    }
}

UserInfo.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <UserHeader />
    }
}
export default connect(mapStatetoProps)(UserInfo);
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
        width: 80,
        height: 80,
        // borderTopLeftRadius: 40,
        // borderTopRightRadius: 40,
        // borderBottomLeftRadius: 40,
        // borderBottomRightRadius: 40,
        // marginRight:10
        borderRadius: 40
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
    },
    items: {
        marginTop: 20,
        height: 300
    },
    item:{
        flex: 1,
        alignItems: 'center'
    },
    itemImg: {
        width: 40,
        height: 40,
        marginBottom: 10
    },
    itemTop: {
        flexDirection: 'row'
    },
    itemBottom: {
        marginTop: 20,
        flexDirection: 'row'
    },
    headerContainer: {
        flex: 1,
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