import React from 'react';

import { FlatList, View, StyleSheet } from 'react-native'

import AppInput from '../components/AppInput';
import colors from '../config/colors';
import Icon from '../components/Icon';

const inputItems = [
    {
      placeholder: "Username",
      icon: {
        name: "person",
        backgroundColor: colors.medium,
      },
    },
    {
      placeholder: "Email",
      icon: {
        name: "mail",
        backgroundColor: colors.medium,
      },
    },
    {
        placeholder: "Password",
        icon: {
          name: "lock-closed",
          backgroundColor: colors.medium,
        },
      },
  ];


function RegisterScreen(props) {
    return (
            <View style={styles.container}>
              <FlatList
                data={inputItems}
                keyExtractor={inputItem => inputItem.placeholder}
                renderItem = {({item}) => 
              <AppInput placeholder={item.placeholder} inputType={item.placeholder === "Password" ? true : false} IconComponent={<Icon name={item.icon.name} size={30} backgroundColor={item.icon.backgroundColor}/>}/>
            }
              />
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default RegisterScreen;