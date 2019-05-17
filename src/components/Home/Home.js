
import React,{ Component } from 'react';
import {  View, Text, StyleSheet,FlatList} from 'react-native'
import Item from './Item'
import { connect } from 'react-redux'
import selectHome from '../../actions/homeAction'
import selectComment from '../../actions/commentAction'


class Home extends Component {
    constructor(props) {
        super(props);
        this.times = this.props.times
        // this.sourceData=this.props.weibos
        this.getWeibo = this.getWeibo.bind(this)
        this.handleEndReached = this.handleEndReached.bind(this)
        this.goToCom = this.goToCom.bind(this)
        this.refreshing = this.props.refreshing
        // this.pageNum = this.props.pageNum //分页索引，用于请求微博
        this.pageNum = 1
        // this.pageSize = this.props.pageSize //每次请求数据的条数
        this.pageSize = 30
    }
    render() {
            return (
                <View>
                    <FlatList
                        data={this.props.weibos}
                        refreshing={this.refreshing}
                        onRefresh={this.getWeibo}
                        onEndReached={this.handleEndReached}
                        renderItem={({item}) =>{
                            return <Item 
                                avatar={item.user.avatar_hd}
                                name={item.user.screen_name}
                                info={item.created_at}
                                content={item.text}
                                urls={item.pic_urls}
                                reposts={item.reposts_count}
                                comments={item.comments_count}
                                likes={item.attitudes_count}
                                goComment={this.goComment.bind(this,item.id)}
                            />
                        }} />                  
                </View>
            );
    }
    getWeibo() {
        this.props.selectHome(this.pageNum, this.pageSize)
        this.refreshing = false
        this.pageNum++
    }
    handleEndReached() {
        alert('end')
    }
    goToCom(){
        this.props.navigation.navigate('comment')
    }
    goComment(id) {
        this.props.navigation.navigate('comment',{
            id
        })
        this.props.selectComment(1,30,id)
    }
    componentDidMount() {
        setTimeout(() => {
            this.refreshing = true
            this.props.selectHome(1,30)
            if(this.refreshing){
                this.refreshing = false
            }
        }, 2000);
    }
}

class HomeHeader extends Component{
    render() {
        return(
            <View style={headStyle.container}>
                <Text style={headStyle.text}>动态</Text>
            </View>
        )
    }
}
const headStyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    img: {
        width: 24,
        height: 24
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1296db'
    }
})

Home.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <HomeHeader />
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        refreshing: true,
        pageNum: 1,
        pageSize: 30,
        weibos: state.homeReducer.weibo.statuses
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        selectHome: (page,count) => dispatch(selectHome(page,count)),
        selectComment: (page,count,id) => dispatch(selectComment(page,count,id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);