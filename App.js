import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import WelcomeScreen from './app/screens/WelcomeScreen'
import ImageView from './app/screens/ImageView';
import Card from './app/components/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';



export default function App() {
  return (
    <SafeAreaView>
      <MyAccountScreen/>
    </SafeAreaView>
    
  );
}

