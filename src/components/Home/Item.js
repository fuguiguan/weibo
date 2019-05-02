import  React,{ Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
} from 'react-native'
import { connect } from 'react-redux'
// const { width,height } = Dimensions.get('window')
import selectHome from  '../../actions/homeAction'

class Item extends Component {
    constructor(props) {
        super(props);
        this.like = this.like.bind(this)
    }
     like() {
        this.props.selectHome(1,10)
        console.log(this.props.weibos)
    }
    // componentDidMount() {
    //     this.props.selectHome(1,30)
    // }
    render() {
        return(
            <View>
                <View style={styles.containerUser}>
                    <Image style={styles.image}source={{uri:this.props.avatar}}/>
                    <View style={styles.userInfo}>
                        <Text>{this.props.name}</Text>
                        <Text>发布于{this.props.info}</Text>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.description}>{this.props.content} ​​​​</Text>
                    <Image source={require('../../assets/images/show.png')}></Image>
                </View>
                <View style={styles.operate}>
                    <View style={[styles.forward,styles.icon]}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../../assets/images/forward_16.png')}/>
                            <Text style={styles.font}>{this.props.reposts}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.comment,styles.icon]}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={this.props.goComment}>
                            <Image source={require('../../assets/images/comment_16.png')}/>
                            <Text style={styles.font}>{this.props.comments}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.like,styles.icon]}>
                        <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={this.like}>
                            <Image source={require('../../assets/images/like_16.png')}/>
                            <Text style={styles.font}>{this.props.likes}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>  
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        times: 1,
        // logined: state.status == AppState.LOGINED
        weibos: state.homeReducer.weibo.statuses
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectHome: (page,count) => dispatch(selectHome(page,count))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Item);

const styles = StyleSheet.create({
    containerUser: {
        padding: 10,
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    image: {
        width:50,
        height:50,
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // borderBottomLeftRadius: 30,
        // borderBottomRightRadius: 30,
        // backgroundColor: 'red'
        borderRadius: 25
    },
    userInfo: {
        // backgroundColor: '#ccc'
    },
    content: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        // backgroundColor: 'purple'
    },
    description: {
        marginBottom:6,
    },
    operate: { //转发、评论、点赞
        // backgroundColor: '#2312f5',
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
        justifyContent: 'center',
        flex: 1,
        // width: 16,
        // height: 16
    },
    font: {
        marginLeft: 6,
        lineHeight: 16,
    },
    forward: {
        alignSelf: 'center',
        // backgroundColor: 'red'
    },
    comment: {
        alignSelf: 'center',
        // backgroundColor: 'yellow'
    },
    like: {
        alignSelf: 'center',
        // backgroundColor: 'purple'
    }

})