import React,{ Component } from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
class Message extends Component {
    static navigationOptions = {
        tabBarlabel: '消息',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <View>
                <Text style={{fontSize:30,textAlign:"center"}}>MessageScreen</Text>
            </View>
        );
    }
}

const MessageStack = createStackNavigator({
    Message: Message
})
export default MessageStack;