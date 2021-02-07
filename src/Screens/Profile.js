import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Profile(props) {
    return (
        <View>
            <Image source={{uri: "https://www.pngkey.com/png/full/438-4380214_key-features-of-blood-bank-management-system-blood.png"}} style={{height: 150, width: '100%', resizeMode: 'contain'}}></Image>
            <View>
                <Text style={{marginTop: 50, marginLeft: 50, fontSize: 20, color: 'grey'}}>Full Name:</Text>
                <Text style={{marginTop: 20, marginLeft: 50, fontSize: 20, color: 'grey'}}>Email:</Text>
                <Text style={{marginTop: 20, marginLeft: 50, fontSize: 20, color: 'grey'}}>Password:</Text>
                <Text style={{marginTop: 20, marginLeft: 50, fontSize: 20, color: 'grey'}}>Phone Number:</Text>
                <Text style={{marginTop: 20, marginLeft: 50, fontSize: 20, color: 'grey'}}>Country, City:</Text>
                <Text style={{marginTop: 20, marginLeft: 50, fontSize: 20, color: 'grey'}}>Blood Group:</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={()=> alert("ok")} style={{backgroundColor: 'red', borderRadius: 50,width: 180, height: 40, marginLeft: 90, marginTop: 30}}>
                <Text style={{fontSize: 20, color: 'white', textAlign: 'center', marginTop: 5}}>Edit your details</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}