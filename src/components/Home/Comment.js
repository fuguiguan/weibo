import  React,{ Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    Button
} from 'react-native'
import { connect } from 'react-redux'
import selectComment from  '../../actions/commentAction'

const { width, height } = Dimensions.get('window')
class Comment extends Component {
    constructor(props) {
        super(props)
        this.doComment = this.doComment.bind(this)
        const { navigation } = this.props
        const id = navigation.getParam(id) // 拿到路由传过来的id
        // this.getComment = this.getComment.bind(this,id)
        this.refreshing = true
        this.data = [
            {name:'傅贵观',text:'其实，我一直都在你身后，就差你一个回头。'},
            {name:'四大石窟',text:'我不知道该说什么，我只是突然在这一刻，很想你。'},
            {name:'扫地',text:'谁又是谁的伊人，谁又是谁的永恒？谁又走进了谁的世界，谁又淡出了谁的心房？当彼此的默契永驻在遥远的梦境里，那盈盈的泪光，可照出伊人的模样？那一曲仰天长啸，那一首壮怀激烈，怎教人：“莫等闲，白了少年头，空悲切！”'},
            {name:'去皮口袋',text:'日夜思念的明月映入眼帘慌忙的寻找黑夜的一边月光浸透了大地的脸'},
            {name:'小那你',text:'凝视着今晚的月亮，心中交集百感钟爱的人不多，月夜风景又如何'},
            {name:'head 机',text:'借着茫茫的月色抒发伤感月夜美，愚人不知又如何'},
        ]
    }
    render() {
        return(
            <View style={styles.commentWrap}>
                <Button title='评论' onPress={this.doComment}/>
                    <FlatList
                        data={this.props.comments}
                        // data={this.data}
                        renderItem={({item}) =>{
                            return (
                                <View>
                                    <CommentItem 
                                        avatar={item.user.profile_image_url}
                                        name={item.user.screen_name}
                                        // name={item.name}
                                        text={item.text}
                                    />
                            </View>
                            )
                        }} />
                <Button title='评论' onPress={this.doComment}/>    
            </View>  
        )
    }
    getComment(id) {
        this.refreshing = true
        this.props.selectComment(1,30,id)
        console.log('点击getcomment按钮')
        if(this.refreshing){
            this.refreshing = false
        }
    }
    // componentDidMount() {
    //     setTimeout(this.getComment(this.id),1000)
    // }
    doComment() {
        alert('评论')
    }
}
export class CommentItem extends Component {
    
    render() {
        return (
            <View style={styles.container}> 
                <View>
                    <Image style={styles.avatar} source={{uri: this.props.avatar}}/>
                    {/* <Image style={styles.avatar} source={require('../../assets/images/user.png')}/> */}
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.title}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        comments: state.commentReducer.comment.comments
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectComment: (page,count,id) => dispatch(selectComment(page,count,id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Comment);
// export default Comment

const styles = StyleSheet.create({
    commentWrap: {
        width: width,
        height: height,
        // padding: 10,
        // paddingRight: 20
    },
    container: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#eee'
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    content: {
        // paddingRight:10
    }
})