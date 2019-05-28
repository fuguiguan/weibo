import React,{ Component } from 'react';
import { 
    View, 
    Text,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView
} from 'react-native';
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import NavigationService from '../../navigations/NavigationService'
class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.handleOnFocused = this.handleOnFocused.bind(this)
    }
    static navigationOptions = {
        tabBarlabel: '关注',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon style={styles.icon} name={focused? 'md-home':'ios-home' } size={16} />
        )
    };
    render() {
        return (
            <KeyboardAvoidingView>
                <View style={styles.container}>
                    <TextInput style={styles.textInput} 
                        placeholder='大家都在搜：nba季后赛'
                        onChangeText={(text) => this.setState({text})}
                        onFocus={this.handleOnFocused}
                    />
                    <Icon style={styles.icon} name='ios-search' size={24}/>
                </View>
            </KeyboardAvoidingView>
        );
    }

    handleOnFocused() {
        // NavigationService.navigate('NotLogin')
    }
}
class SearchHeader extends Component{
    render() {
        return(
            <View style={styles.headerContainer}>
                {/* <Image source={require('../../assets/images/camaro.png')} style={headStyle.img}/> */}
                <Text style={styles.headerText}>搜索</Text>
                {/* <Image source={require('../../assets/images/plus.png')} style={headStyle.img}/> */}
            </View>
        )
    }
}

Search.navigationOptions = ({navigation}) => {
    return {
        headerTitle: <SearchHeader />
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
        left: 40
    },
    textInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#fee',
        paddingLeft: 60,
        paddingRight: 10,

    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        textAlign: 'center'
    }
})
export default Search;