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
const { width, height } = Dimensions.get('window')
class CommentMsg extends Component {
    constructor(props) {
        super(props)
    }

     _keyExtractor = (item) => item.id

    render() {
        return(
            <View style={styles.commentWrap}>
                <FlatList
                    data={this.props.myComments}
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
                 <Text>{this.props.desc}</Text>
            </View>  
        )
    }
}
export class CommentItem extends Component {
    
    render() {
        return (
            <View style={styles.container}> 
                <View>
                    <Image style={styles.avatar} source={{uri: this.props.avatar}}/>
                </View>
                <View style={styles.content}>
                    <Text style={styles.name}>{this.props.name}</Text>
                    <Text style={styles.title}>{this.props.text}</Text>
                </View>
                <View style={styles.weiboInfo}>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        desc: 'a handsome boy',
        myComments: state.commentMsgReducer.myComment.comments
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        s
    }
}
export default connect(mapStateToProps,null)(CommentMsg);
// export default CommentMsg
const styles = StyleSheet.create({
    commentWrap: {
        width: width,
        height: height,
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
    },
    weiboInfo: {

    }
})