import React from 'react';
import { Text, ActivityIndicator, ListView } from 'react-native';
import style from '../styles/style';
import axios from 'axios';
import WeatherRow from './weather/Row';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class class_list extends React.Component {

    static navigationOptions = ({ navigation }) => {
        console.log('params ', navigation)
        return {
            title: `Météo / ${navigation.state.params.city}`,
             tabBarIcon: () => {
            return <Icon name="user" size={20} color="#000" />
        }
        }
    }

    constructor(props) {
        super(props)
        console.log("props ", props)
        console.log("state ", this.props.navigation.state)
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {
            this.fetchWeather();
        }, 1000)
    }

    fetchWeather () {
        console.log('this.state.city', this.state.city)
        axios.get(`https://openweathermap.org/data/2.5/forecast/daily?q=Paris,&mode=json&units=metric&cnt=10&appid=b6907d289e10d714a6e88b30761fae22`)
        .then((response) => {
            console.log('response' , response.data);
            this.setState({report: response.data})
        })
    }
    render() {
        if (this.state.report === null) {
            return (
                 <ActivityIndicator color={style.color} size="large" animating={true}/>
            )

        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ListView
                dataSource={ds.cloneWithRows(this.state.report.list)}
                renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
                />
            )
        }

    }
}