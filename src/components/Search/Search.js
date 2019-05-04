import React,{ Component } from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    static navigationOptions = {
        tabBarlabel: '关注',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon style={styles.icon} name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.textInput} 
                    placeholder='大家都在搜：'
                />
                <Icon name='ios-search' size={24}/>
            </View>
        );
    }
}
Search.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <Text>我</Text>
    }
}
// const RankStack = createStackNavigator({
//     Search: Search
// })
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        position: 'absolute',
        right: 40
    },
    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#eee',
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default Search;