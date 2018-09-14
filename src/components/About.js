import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Platform,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

 import style from '../styles/style';

export default class About extends React.Component {

static navigationOptions = {
        title: 'title',
        tabBarIcon: () => {
            return <Icon name="home" size={20} color="#000" />
        }
    }

    search () {
        this.props.navigation.navigate('Search');
    }
    render() {
        return (
    <View>
        <Text style={style.welcome}>
          Welcome to React Native!
        </Text>
       <Button color={style.color} onPress={() => this.search()} title="Recherche une ville"/>
    </View>
        )
    }
}
 