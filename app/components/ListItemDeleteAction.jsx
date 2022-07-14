import React from 'react';

import { View, StyleSheet, TouchableWithoutFeedback} from 'react-native'
import Icon from './Icon';
import colors from '../config/colors';

function ListItemDeleteAction({ onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name='trash-can' size={50}  color={colors.white} backgroundColor={colors.danger}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
      },
})

export default ListItemDeleteAction;