
import React,{ Component } from 'react';
import { ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Item from './Item'
export default class Home extends Component {
    static navigationOptions = {
        tabBarlabel: '首页',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <ScrollView>
                <Item />
                <Item />    
            </ScrollView>

        );
    }
}

