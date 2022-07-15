import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import AppButton from '../components/AppButton'


function WelcomeScreen(props) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.bgImg} blurRadius={5}>
           <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
           </View>
            
            <View style={styles.buttonsContainer}>
                <AppButton title="Login"/>
                <AppButton title="Register" color='secondary'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bgImg :{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
      },

    buttonsContainer: {
        padding: 20,
        width: "100%"
    },

    logo: {
        width: 80,
        height: 80,
    },

    logoContainer: {
        alignItems: "center",
        position: "absolute",
        top: 70
    },

    tagLine: {
        fontSize: 19,
        paddingVertical: 15,
        fontWeight: "600"
    }
   
})

export default WelcomeScreen;


