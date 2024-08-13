import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem';
import CarList from './components/CarList';
import Header from './components/Header';

// {/* <CarItem  name='Model S'
// mline='Order online for'
// clicktag=' touchless delivery'
// image={require('./assets/images/ModelS.jpeg')}
// /> */}
export default function App() {
  return (
    <View style={styles.container}>
        <Header/>
        <CarList/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
