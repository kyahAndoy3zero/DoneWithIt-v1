import React from 'react';
import { View, StyleSheet, Image } from 'react-native'

import Icon from '../components/Icon';
import colors from  '../config/colors'


function ImageView(props) {
    return (
        
        <View style={styles.container}>
                <View style={styles.close}>
                    <Icon name={"close-outline"} iconColor={"white"} size={40} backgroundColor={colors.primary}/>
                </View>
                 <View style={styles.delete}>
                    <Icon name={"trash-outline"} iconColor={"white"} size={40} backgroundColor={colors.secondary}/>
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
        right: 30,
    },
    
    img: {
        width: "100%",
        height: "100%",    
    },


})

export default ImageView;