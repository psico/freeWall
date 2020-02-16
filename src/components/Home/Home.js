import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, ImageBackground, Picker} from 'react-native';

let radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];
let bgColor = "red";
let language = "web";

export class Home extends Component {

    state = { language: "web" };

    constructor() {
        super();
        this.language = "web";
    }

    save = () => {
        bgColor = "orange";
        Alert.alert('Ola mundo');
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('./fundo.jpg')}
                                 style={styles.backgroundImage}>
                    {this.props.children}
                    <View>
                        <Text style={styles.title}>Welcome to FreeWall</Text>
                        <Text style={styles.text}>Every day you background will change automatic, you only need choose galery in your mobile
                            or a random image on the web</Text>
                        <Picker
                            selectedValue={this.state.language}
                            style={styles.text}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                            }>
                            {/*<Picker.Item label="Web" value"web" />*/}
                            {/*<Picker.Item label="Mobile" value"mobile" />*/}
                        </Picker>
                        <Button
                            title='Save'
                            onPress={this.save}/>
                    </View>
                </ImageBackground>
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
        backgroundColor: bgColor,
        color: "white",
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    text: {
      color: "white"
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        marginVertical: 12,
        color: 'white',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
