import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

import colors from  '../config/colors'

function ImageView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.close}></View>
            <View style={styles.delete}></View>
         <Image source={require('../assets/chair.jpg')} style={styles.img} resizeMode="contain"/>
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.back
    },
    close: {  
        backgroundColor: colors.secondary,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        right: 30
    },

    delete: {
        backgroundColor: colors.primary,
        width: 50,
        height: 50,
        position: "absolute",
        top: 40,
        left: 30
    },
    
    img: {
        width: "100%",
        height: "100%",    
    },


})

export default ImageView;