import React, {useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, SafeAreaView, ImageBackground, Picker} from 'react-native';
// import WallPaperManager from 'react-native-wallpaper-enhanced';
import RNWalle from "react-native-walle";

function Home() {
    const [selectedValue, setSelectedValue] = useState("language");
    const [backgroundImageValue, setBackgroundImageValue] = useState(4);

    console.log('ddddddddddddd eeeeeee');
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
                            Alert.alert('Ola mundo');
                            if (backgroundImageValue === 4) {
                                setBackgroundImageValue(3);
                                // WallPaperManager.setWallpaper({uri: 'https://cdn.pixabay.com/photo/2018/08/21/23/29/fog-3622519__340.jpg'}, (res)=> console.log(res));
                                RNWalle.setWallPaper("http://i.imgur.com/DvpvklR.png", function(res) {
                                    console.log(res);
                                    //res : 'success'
                                    //res : 'failed' or 'reason to fail while trying to set wallpaper'
                                });
                            } else {
                                setBackgroundImageValue(4);
                                // WallPaperManager.setWallpaper({uri: 'https://cwsmgmt.corsair.com/newscripts/landing-pages/wallpaper/v4/Wallpaper-v4-2560x1440.jpg'}, (res)=> console.log(res));
                                RNWalle.setWallPaper("http://i.imgur.com/DvpvklR.png", function(res) {
                                    console.log(res);
                                    //res : 'success'
                                    //res : 'failed' or 'reason to fail while trying to set wallpaper'
                                });
                            }
                        }}/>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

let save = () => {
    Alert.alert('Ola mundo');
};

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
