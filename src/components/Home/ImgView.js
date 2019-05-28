import React,{ Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
class ImgView extends Component {
    constructor(props) {
        super(props)
        const { navigation } = this.props
        this.uri = navigation.getParam('url')
        this.state = {}
    }
    render() {
        return (
            <View style={styles.container}>
                <Image  style={styles.image} source={{uri: this.uri.thumbnail_pic}}/>
            </View>
        );
    }
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    },
    image: {
        marginBottom: 50,
        width: width,
        height: height*0.8
    }
})
export default ImgView;