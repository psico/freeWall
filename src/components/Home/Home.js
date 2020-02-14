import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, Image} from 'react-native';
import RadioForm from "react-native-simple-radio-button";
import {ImageBackground} from "react-native-web";


let radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];
let bgColor = "red";

export class Home extends Component {

    save = () => {
        bgColor = "orange";
        Alert.alert('Ola mundo');
    }

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Welcome to FreeWall</Text>
                    <Text>Every day you background will change automatic, you only need choose galery in your mobile or
                        a
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
                        onPress={this.save}/>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 12,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    }
});
