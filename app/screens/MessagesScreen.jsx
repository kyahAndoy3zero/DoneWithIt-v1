import React from 'react';
import { FlatList} from 'react-native'
import ListItem from '../components/ListItem';
import ListSeparator from '../components/ListSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const messages = [
   {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg')
   },
   {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg')
   },
]

const printData = (message, data) =>{
    console.log(message, data)
}

function MessagesScreen(props) {
    return (
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => printData("Message", item)}
                renderRightActions={() => <ListItemDeleteAction/>}
            />}
         ItemSeparatorComponent={ListSeparator}
         />
    );
}

export default MessagesScreen;