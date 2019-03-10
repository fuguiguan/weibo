import React,{ Component } from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Rank extends Component {
    static navigationOptions = {
        tabBarlabel: '关注',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <View>
                <Text style={{fontSize:30,textAlign:"center"}}>RankScreen</Text>
            </View>
        );
    }
}
