import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from './components/header/Header'
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Body/>
      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;