import  React,{ Component } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    Dimensions,
    FlatList,
} from 'react-native'
import { connect } from 'react-redux'
const { width, height } = Dimensions.get('window')
class CommentAtMeView extends Component {
    constructor(props) {
        super(props)
    }
     _keyExtractor = (item) => item.id

    render() {
        return(
            <View style={styles.commentWrap}>
                <FlatList
                    data={this.props.commentsAtMe}
                    keyExtractor={this._keyExtractor}
                    renderItem={({item}) =>{
                        return (
                            <View>
                                <CommentItem 
                                    avatar={item.user.profile_image_url}
                                    name={item.user.screen_name}
                                    text={item.text}
                                />
                        </View>
                        )
                    }} /> 
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
            </View>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        commentsAtMe: state.commentAtMeReducer.commentAtMe.comments
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        
    }
}
export default connect(mapStateToProps,null)(CommentAtMeView)
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
    }
})