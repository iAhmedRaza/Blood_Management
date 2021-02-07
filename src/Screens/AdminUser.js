import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';


export default function AdminLogin(props) {
    return(
        <View style={styles.container}>
            <View style={{alignItems: 'center'}}>
            <Image style={{height: 160, width: 160, marginTop: 50, resizeMode: 'contain'}} source={{uri: "https://vignette.wikia.nocookie.net/fan-fiction-library/images/1/15/Admin.png/revision/latest?cb=20140917130743"}} ></Image>
            <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={()=> props.navigation.navigate("Admin")}>
            <Text style={styles.btnT}>Admin Login</Text>    
            </TouchableOpacity>
            <Image style={{height: 160, width: 160, marginTop: 50}} source={{uri: "https://secure.webtoolhub.com/static/resources/icons/set44/7acf73fc.png"}}></Image>
            <TouchableOpacity style={styles.btn1} activeOpacity={0.8} onPress={()=> props.navigation.navigate("User")}>
            <Text style={styles.btnT1}>User Login</Text>    
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'red',
        width: 160,
        height: 50,
        borderRadius: 40,
        alignItems: 'center'
    },
    btn1: {
        backgroundColor: 'red',
        width: 160,
        height: 50,
        borderRadius: 40,
        alignItems: 'center',
        marginTop: 10,
        alignItems: 'center'
    },
    btnT: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 7
    },
    btnT1: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        marginTop: 7,
    },
    container: {
        flex: 1,
        flexDirection: "column",
    },
    image: {
        flex: 1,
        resizeMode: "contain",
        justifyContent: "center",
    },
}) 