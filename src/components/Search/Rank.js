import React,{ Component } from 'react';
import { View, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
class Rank extends Component {
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

const RankStack = createStackNavigator({
    Rank: Rank
},{
    navigationOptions: {
        header: null
    }
})
export default RankStack;