import React,{ Component } from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Home extends Component {
    static navigationOptions = {
        tabBarlabel: '首页',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <View>
                <Text style={{fontSize:30,textAlign:"center"}}>HomeScreen</Text>
            </View>
        );
    }
}
