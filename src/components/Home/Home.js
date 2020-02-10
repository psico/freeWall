import React, {Component} from 'react';
import {View, Text, Button, Alert} from 'react-native';
import RadioForm from "react-native-simple-radio-button";

var radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];

export class Home extends Component {

    render() {
        return (
            <View>
                <Text>Welcome to FreeWall</Text>
                <Text>Every day you background will change automatic, you only need choose galery in your mobile or a
                    random image on the web</Text>
                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {
                        this.setState({value: value})
                    }}
                />
                <Button
                    title='Save'
                    onPress={() => Alert.alert('Ola mundo')} />
            </View>
        );
    }
}
