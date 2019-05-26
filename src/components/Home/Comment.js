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
    }

     _keyExtractor = (item) => item.id

    render() {
        return(
            <View style={styles.commentWrap}>
                <Button title='写评论' onPress={this.doComment}/>
                    <FlatList
                        data={this.props.comments}
                        keyExtractor={this._keyExtractor}
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