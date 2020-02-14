import React, {Component} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, Image} from 'react-native';
import RadioForm from "react-native-simple-radio-button";
import {ImageBackground} from "react-native-web";


var radio_props = [
    {label: 'My Pictures', value: 0},
    {label: 'Web Pictures', value: 1}
];

export class Home extends Component {

    render() {
        return (

            <SafeAreaView style={styles.container}>
                <View>
                    {/*<ImageBackground source={{ uri: "https://source.unsplash.com/random" }} style={styles.backgroundImage}>*/}
                    {/*    <Text>Teste</Text>*/}
                    {/*</ImageBackground>*/}
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
                        onPress={() => Alert.alert('Ola mundo')}/>
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        textAlign: 'center',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
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
    // ,
    // screenBackground: {
    //     backgroundImage: url("https://source.unsplash.com/random")
    // }
});
