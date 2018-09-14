import React, { Component, PropTypes } from "react";
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/fr';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FadeInView from '../../animation/fadeInView'



moment.locale('fr');


export default class Row extends Component {

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white, style.bold]}> {day.toUpperCase()} </Text>
        )
    }
    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text style={style.bold}> {day} </Text>
        )
    }
    icon(size) {
        const type = this.props.day.weather[0].main;
        console.log(type)
        let icon;
        switch (type) {
            case 'Clouds':
                icon = "weather-partlycloudy";
                break;
            case 'Rain':
                icon = "weather-pouring";
                break;
            case 'Snow':
                icon = "weather-snowy";
                break;
            case 'Hail':
                icon = "weather-hail";
                break;
            default:
                icon = "weather-sunny";
        }
        return <Icon name={icon} size={size} color="#FFF" />
    }
    render() {
        console.log('PropTypes', this.props);
        if (this.props.index === 0) {
            return (
                <FadeInView delay={this.props.index * 50}>
                <View style={[style.view, style.flex, style.firstView]}>
                    <View>
                        <Text style={{ color: "#FFF" }}>{this.day()} {this.date()} </Text>
                        {this.icon(90)}
                        
                    </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)} °C </Text>
                </View>
                </FadeInView>
            )
        } else {
            return (
            <FadeInView delay={this.props.index * 50}>
                <View style={[style.view, style.flex]}>
                    <View style={style.flex}>
                        {this.icon(30)}
                        <Text style={{ marginLeft: 10 }}>{this.day()} {this.date()} </Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.day.temp.day)} °C </Text>
                </View>
            </FadeInView>
                
            )
        }

    }
}

const style = StyleSheet.create({
    white: {
        color: '#FFF',
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#e54b65'
    },
    view: {
        backgroundColor: "#394163",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between',
    },
    temp: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 22
    }
})