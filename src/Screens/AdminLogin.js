// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function AdminLogin() {
//     return (
//         <View style={styles.container}>
//             <View style={styles.bloodD}><Text>Blood Donors</Text></View>
//             <View style={styles.registerC}><Text>Registered Customers</Text></View>
//             <View style={styles.totalB}><Text>Same blood groups</Text></View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//     },
//     registerC: {
//         width: 90
//     },
//     bloodD: {
//         width: 130,
//         marginLeft: 10
//     },
//     totalB: {
//         width: 130
//     }
// })

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BloodDonor from './BloodDonor';
import RegisteredCustomer from './RegisteredCustomer';
import SameBlood from './SameBlood';

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
        <Tab.Screen name="Blood Donors" component={BloodDonor}/>
        <Tab.Screen name="Registered Users" component={RegisteredCustomer} />
        <Tab.Screen name="Same Blood Groups" component={SameBlood} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
