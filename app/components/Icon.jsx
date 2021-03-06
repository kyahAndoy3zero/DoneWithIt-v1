import React from 'react';
import { View, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons'

function Icon({
    name, 
    size = 40, 
    backgroundColor = '#000', 
    iconColor='#fff'
}) {
    return (
     
            <View style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: backgroundColor,
                justifyContent: "center",
                alignItems: "center",
                marginRight: 10
                }}>

                    
            <Ionicons 
                name={name} 
                color={iconColor} 
                size={size * 0.5}
               
                    />
            </View>
        
    );
}



export default Icon;