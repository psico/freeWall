import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, ImageBackground} from 'react-native';

function Home() {
    const [backgroundImageValue, setBackgroundImageValue] = useState('https://facebook.github.io/react/logo-og.png');

    return (
        <ImageBackground source={{
            uri: backgroundImageValue,
            method: 'POST',
            headers: {
                Pragma: 'no-cache',
            },
            body: 'Your Body goes here',
        }}
                         style={styles.backgroundImage}>
            <View>
                <Text style={styles.title}>Welcome to FreeWall</Text>
                <Text style={styles.text}>Touch the change button to alternate wallpaper.</Text>
                <Button
                    title='Change image'
                    onPress={() => {
                        let RandomNumber = Math.floor(Math.random() * 100) + 1;
                        setBackgroundImageValue('https://i.picsum.photos/id/' + RandomNumber + '/400/600.jpg');
                    }}/>
            </View>
        </ImageBackground>
    );
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: "-apple-system, BlinkMacSystemFont Segoe UI",
        justifyContent: "center",
        alignItems: "center",
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
