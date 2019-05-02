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

class Comment extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props
        const id = navigation.getParam(id)
        this.getComment = this.getComment.bind(this,id)
        this.refreshing = true
    }
    render() {
        return(
            <View style={styles.commentWrap}>
               <Button title='getComment' onPress={this.getComment}/>
                    <FlatList
                        data={this.props.comments}
                        refreshing={this.refreshing}
                        onRefresh={this.getComment}
                        renderItem={({item}) =>{
                            return <CommentItem 
                                text={item.text}
                                id={item.id}
                            />
                        }} />       
            </View>  
        )
    }
    getComment(id) {
        this.props.selectComment(1,30,id)
        console.log('点击getcomment按钮')
        if(this.refreshing){
            this.refreshing = false
        }
    }

}
export class CommentItem extends Component {
    
    render() {
        return (
            <View>
                <View>
                    {/* <Image style={}source={{uri:this.props.avatar}}/> */}
                    <View>
                        <Text> 内容：{this.props.text}</Text>
                        {/* <Text>发布于{this.props.info}</Text> */}
                    </View>
                </View>
                <View>
                    <Text>ID：{this.props.id} ​​​​</Text>
                    {/* <Image source={require('../../assets/images/show.png')}></Image> */}
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

})