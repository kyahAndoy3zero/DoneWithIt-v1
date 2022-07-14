import React, { useState } from 'react';
import { FlatList} from 'react-native'
import ListItem from '../components/ListItem';
import ListSeparator from '../components/ListSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';



const InitialMessages = [
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



function MessagesScreen(props) {
    const [messages, setMessages] = useState(InitialMessages)
    const [refreshing, setRefreshing] = useState(false);


    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
    }

    return (
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({item}) => 
            <ListItem 
                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log('Message', item)}
                renderRightActions={() => 
                <ListItemDeleteAction onPress={() => handleDelete(item)}/>
                }
            />}
            ItemSeparatorComponent={ListSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: 'T2',
                        description: 'D2',
                        image: require('../assets/mosh.jpg')
                       },
                ])
            }}
         />
    );
}

export default MessagesScreen;