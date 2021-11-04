import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import SearchBox from './components/mainp/SearchBox';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style = {styles.headContainer}>
        <Text style = {styles.appTitle}>College Market</Text>
      </View>
      <View style = {styles.bodyCotainer}>
        <SearchBox></SearchBox>
      </View>
      <View style = {styles.tailContainer}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headContainer: {
    flex:1,
    backgroundColor: 'white',
  },
  bodyCotainer: {
    flex:4,
    backgroundColor: 'rgb(200, 200, 200)',
  },
  tailContainer:{
    flex:1,
    flexDirection: 'row',
    backgroundColor: 'rgb(160, 160, 160)',
  },
  appTitle: {
    color: 'black',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
});
export default App;