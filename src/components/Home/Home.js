import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RadioForm, {RadioButton} from "react-native-simple-radio-button";

var radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];

export class Home extends Component {

    render() {
        return (
            <View>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {
                        this.setState({value: value})
                    }}
                />
            </View>
        );
    }
}
