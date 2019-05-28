import React,{ Component } from 'react';
import {  View, FlatList} from 'react-native'
import Item from '../Home/Item'
import { connect } from 'react-redux'
import getMyWeiboAction from '../../actions/myWeiboAction'
class MyWeibo extends Component {
    constructor(props) {
        super(props);
        this.getMyWeibo = this.getMyWeibo.bind(this)
        this.refreshing = false
    }
    _keyExtractor = (item) => item.id
    render() {
            return (
                <View>
                    <FlatList
                        data={this.props.myWeibos}
                        refreshing={this.refreshing}
                        onRefresh={this.getMyWeibo}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item}) =>{
                            return <Item 
                                key={item.id}
                                avatar={item.user.avatar_hd}
                                name={item.user.screen_name}
                                info={item.created_at}
                                content={item.text}
                                urls={item.pic_urls}
                                reposts={item.reposts_count}
                                comments={item.comments_count}
                                likes={item.attitudes_count}
                                // goComment={this.goComment.bind(this,item.id)}
                            />
                        }} />                  
                </View>
            );
    }
    getMyWeibo() {
        this.props.getMyWeibos(1,30)
        this.refreshing = false
    }
    componentDidMount() {
        setTimeout(()=> {
            this.refreshing = false
        },1000)
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        myWeibos: state.myWeiboReducer.myWeibo.statuses
    }
}
const mapDispatchToProps = (dispatch,ownProps) => {
    return {
       getMyWeibos: (page,count) => dispatch(getMyWeiboAction(page,count))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MyWeibo);