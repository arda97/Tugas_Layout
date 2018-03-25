/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.boxSatu}>
           <Text style={styles.textHeader}> Pendidkan Teknik Informatika </Text>
        </View>
        <View style={styles.boxDua}>
           <Text style={styles.textSlider}> Slider </Text>
        </View>
        <View style={styles.boxTiga}>
         <View style={styles.boxEmpat}>

            <View style={styles.containerChildBox}>
                  <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 1 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 2 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 3 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 4 </Text>
                 </View>
            </View>

            <View style={styles.containerChildBox}>
                  <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 5 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 6 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 7 </Text>
                 </View>
                 <View style={styles.childBox}>
                       <Text style={styles.NumberChildBox}> 8 </Text>
                 </View>
            </View>

 
         </View>
         <View style={styles.boxLima}>
            <Text style={styles.textfooter}> #JaenKuliahdiPTI </Text>
         </View>
        </View>
      </View>

    );
  }
}


export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',

  },
  textHeader: {
    fontSize: 30,
    color: 'white'

  },
  textfooter: {
    fontSize: 30,
    color: 'white'

  },
  textSlider: {
    fontSize: 30,
    color: 'black'
  },
  boxSatu:{
    flex: 1,
    backgroundColor: '#1faa00',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxDua: {
    flex: 3,
    backgroundColor:'#ffff72',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxTiga: {
    flex: 4,
    backgroundColor: '#64dd17'
  },
  boxEmpat: {
    flex: 3,
    backgroundColor: '#9cff57',
    marginLeft: 10,
    marginRight: 10,
    marginTop : 14,
    marginBottom: 15,
    flexDirection: 'column',
    justifyContent: 'space-around'
    
  },
  boxLima: {
    flex: 1,
    backgroundColor: '#1faa00',
    marginLeft: 10,
    marginRight: 10,
    marginTop : 14,
    marginBottom: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  NumberChildBox: {
      color: 'black',
      fontSize: 23
    },
    containerChildBox: {
    flex: 3,
    backgroundColor: '#9cff57',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  childBox: {
    flex: 1,
    backgroundColor: 'white',  
    marginLeft: 10,
    marginRight: 10,
    marginTop : 14,
    justifyContent: 'center',
    alignItems: 'center'
  },
  

});

