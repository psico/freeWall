import React, {Component} from 'react';
import {View, Text} from 'react-native';
import RadioForm, {RadioButton} from "react-native-simple-radio-button";
import {Button} from "react-native-web";

var radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];

export class Home extends Component {

    save() {
        alert('Ola mundo');
    }

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
                <Button onPress={this.save()} title="Save"/>
            </View>
        );
    }
}
