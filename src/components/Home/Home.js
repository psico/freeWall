import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, ImageBackground, Picker} from 'react-native';

function Home() {
    const [selectedValue, setSelectedValue] = useState("language");
    const [backgroundImageValue, setBackgroundImageValue] = useState(4);

    console.log(require('./cars.jpg'));
    console.log(require('./fundo.jpg'));

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={backgroundImageValue}
                             style={styles.backgroundImage}>
                <View>
                    <Text style={styles.title}>Welcome to FreeWall</Text>
                    <Text style={styles.text}>Every day you background will change automatic, you only need choose
                        galery in your mobile
                        or a random image on the web</Text>
                    <View>
                        <Picker
                            selectedValue={selectedValue}
                            style={styles.text}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} >
                            <Picker.Item label="Web" value="web" />
                            <Picker.Item label="Mobile" value="mobile" />
                        </Picker>
                    </View>
                    <Button
                        title='Save'
                        onPress={() => {
                            if (backgroundImageValue === 4) {
                                setBackgroundImageValue(3);
                            } else {
                                setBackgroundImageValue(4);
                            }
                        }}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
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
