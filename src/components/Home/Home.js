import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';
import RadioForm from "react-native-simple-radio-button";

let radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];
let bgColor = "red";

export class Home extends Component {

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
                        <RadioForm
                            style={styles.text}
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
