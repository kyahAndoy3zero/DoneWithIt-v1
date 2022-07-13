import React from 'react';
import { View, StyleSheet, Image } from 'react-native'
import {MaterialCommunityIcons}  from '@expo/vector-icons'
import colors from  '../config/colors'

function ImageView(props) {
    return (
        <View style={styles.container}>
            <View style={styles.close}>
                <MaterialCommunityIcons name="close" color="white" size={35}/>
            </View>
            <View style={styles.delete}>
                <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
            </View>
         <Image source={require('../assets/chair.jpg')} style={styles.img} resizeMode="contain"/>
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    close: {  
        position: "absolute",
        top: 40,
        left: 30
    },
    delete: {
        position: "absolute",
        top: 40,
        right: 30
    },
    
    img: {
        width: "100%",
        height: "100%",    
    },


})

export default ImageView;