import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import WelcomeScreen from './app/screens/WelcomeScreen'
import ImageView from './app/screens/ImageView';
import Card from './app/components/Card';

export default function App() {
  return (
   
      <Card
      title="Red jack for sale"
      subTitle="$100"
      image={require("./app/assets/jacket.jpg")}
      />
    
  );
}

