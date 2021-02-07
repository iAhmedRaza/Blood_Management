import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from '../Screens/User';
import UserLogin from '../Screens/UserLogin';
import Register from '../Screens/Register';
import AdminUser from '../Screens/AdminUser';
import Admin from '../Screens/Admin';
import AdminLogin from '../Screens/AdminLogin';

const Stack = createStackNavigator();

function Navigation(props) {
  const loginPg = () => {
    props.navigation.navigate("User")
}
    return (
      <NavigationContainer >
        <Stack.Navigator>
        <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Image style={{height: 80, width: 500, resizeMode: 'contain', marginLeft: -190}} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}}></Image>
           }}
          name="AdminUser" component={AdminUser} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'white'}}>Admin Login</Text>
           }}
          name="AdminLogin" component={AdminLogin} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'white'}}>Admin</Text>
           }}
          name="Admin" component={Admin} />
          <Stack.Screen options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitle: props => <Text style={{fontSize: 30, color: 'white'}}>User</Text>
            // headerTitle: props => <Image style={{height: 70, width: 500, resizeMode: 'contain', marginLeft: -190}} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}}></Image>
           }}
          name="User" component={User} />
          <Stack.Screen name="UserLogin" component={UserLogin} options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitle: props => <View style={{flexDirection: 'row'}}><Text style={{fontSize: 25, color: 'white', marginLeft: -30, marginTop: 5}}>User Login</Text>
            <TouchableOpacity onPress={loginPg} activeOpacity={0.8} style={{marginLeft: 110,marginTop: 5,borderWidth: 2,padding: 5, borderColor: 'white', borderRadius: 50}}><Text onPress={loginPg} style={{fontSize: 20, color: 'white'}}>Logout</Text></TouchableOpacity>
            </View>
            // headerTitle: props => <Image style={{height: 70, width: 500, resizeMode: 'contain', marginLeft: -190}} source={{uri: "https://miro.medium.com/max/1838/1*KJACFKJ0GKtnhgR7OmlPFA.gif"}}></Image>
           }}/>
          <Stack.Screen
           name="Register" component={Register} options={{
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitle: props => <Image style={{height: 50, width: 450, resizeMode: 'contain', marginLeft: -110}} source={{uri: "https://thumbs.dreamstime.com/b/register-now-web-button-icon-isolated-white-background-editable-vector-illustration-register-now-151488300.jpg"}}></Image>
           }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default Navigation;