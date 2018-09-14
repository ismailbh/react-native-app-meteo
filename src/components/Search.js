import React from 'react';
import { TextInput, Button, View, Keyboard } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import style from '../styles/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import List from './List';


class Search extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Icon name="user" size={20} color="#000" />
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            city: 'Paris'
        }
        
    }
    setCity(city) {
        this.setState({ city })
    }

    submit() {
        Keyboard.dismiss();
        this.props.navigation.navigate('Result', { city: this.state.city })
    }
    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={() => this.submit()}
                    style={style.input}
                    value={this.state.city}
                />
                <Button color={style.color} onPress={() => this.submit()} title="Rechercher" />
            </View>

        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}
export default createStackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    },
})