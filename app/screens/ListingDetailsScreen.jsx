import React from 'react';
import { View, Image, StyleSheet} from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>

                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Ortecio"
                        subTitle="5 Listing"
                    ></ListItem> 
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 15
    },
    image: {
        width: "100%",
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
       
    },
    price: {
        color: colors.secondary,
        fontSize: 20,
        fontWeight: "bold",
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 45
    }
})

export default ListingDetailsScreen;