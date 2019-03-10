import React,{ Component } from 'react';
import { View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }

    }
    static navigationOptions = {
        tabBarlabel: '我的',
        tabBarIcon: ({ focused, tintColor}) => (
            <Icon name={focused? 'md-home':'ios-home' } size={16} />
        )
    };

    render() {
        return (
            <View>
                <Text style={{fontSize:30,textAlign:"center"}}>MineScreen</Text>
            </View>
        );
    }

    // componentWillMount() {
    //     fetch('https://api.weibo.com/oauth2/authorize?client_id=3207738322&redirect_uri=https://fuguiguan.cn','get')
    //     .then((res) => this.setState(text,res)
    //     .catch((err) => new Error('error'))
    // }
}