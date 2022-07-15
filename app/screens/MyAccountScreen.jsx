import React from 'react';

import { View, FlatList, StyleSheet} from 'react-native'

import ListItem from '../components/ListItem'
import Icon from '../components/Icon';
import colors from '../config/colors';
import ListSeparator from '../components/ListSeparator';


const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "list-outline",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "mail-outline",
        backgroundColor: colors.secondary,
      },
    },
    {
        title: "Settings",
        icon: {
          name: "settings-outline",
          backgroundColor: colors.medium,
        },
      },
  ];


function MyAccountScreen(props) {
    return (
       
        <View style={styles.container}>
            <ListItem title="Zandro Gene Ortecio" subTitle={'kyahandoy@gmail.com'} image={require('../assets/kyah.jpg')}/>
            <View style={styles.container}>
            <FlatList
                data={menuItems}
                keyExtractor={menuItem => menuItem.title}
                ItemSeparatorComponent={ListSeparator}
                renderItem={({item}) =>
                <ListItem
                    title={item.title}
                    IconComponent={<Icon backgroundColor={item.icon.backgroundColor} name={item.icon.name}/>}
                 />}
            /> 
            </View>
            <ListItem title={'Log out'} IconComponent={<Icon name={'log-out-outline'} backgroundColor={colors.logout}/>}/>
        </View>
      
    );
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
})

export default MyAccountScreen;