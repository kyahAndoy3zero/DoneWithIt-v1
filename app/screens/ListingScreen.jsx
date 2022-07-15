import React from 'react';

import { FlatList } from 'react-native'
import Card from '../components/Card';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg')
    },
    {
        id: 2,
        title: 'Couch in grate condition',
        price: 1000,
        image: require('../assets/couch.jpg')
    },
]

function ListingScreen(props) {
    return (
        <FlatList
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({item}) => 
        <Card 
            title={item.title} 
            subTitle={"$" + item.price} 
            image={item.image}/>
        }
        />
    );
}

export default ListingScreen;