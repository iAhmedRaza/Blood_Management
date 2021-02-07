// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// export default function UserLogin() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.registerC}><Text>Sell Blood</Text></View>
//             <View style={styles.searchS}><Text>Search Donors</Text></View>
//             <View style={styles.about}><Text>About</Text></View>
//             <View style={styles.profileU}><Text>Profile</Text></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//     },
//     registerC: {
//         width: 90,
//         marginLeft: 20
//     },
//     about: {
//         width: 60,
//         marginLeft: 20
//     },
//     profileU: {
//         width: 130,
//         marginLeft: 10
//     },
//     searchS: {
//         width: 100,
//     }
// })


import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SellBlood from './SellBlood';
import SearchDonor from './SearchDonor';
import About from './About';
import Profile from './Profile';



const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator tabBarOptions={{
      style: {
        backgroundColor: 'white'
      },
      indicatorStyle: {
        backgroundColor: 'red',
        height: 3
      }
    }}>
        <Tab.Screen name="Sell Blood" component={SellBlood} />
        <Tab.Screen name="Search Donor" component={SearchDonor} />
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}