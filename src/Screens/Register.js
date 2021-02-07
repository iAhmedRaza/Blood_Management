import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Picker, Image, CheckBox } from 'react-native';
import { render } from 'react-dom';

function Register(props) {
    const [selectedValue, setSelectedValue] = useState("Blood Group");
    const image = { uri: "https://photo-cdn.urdupoint.com/media/2018/01/_3/730x425/pic_1516105388_1.jpg" };
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={styles.container}>
           <Image style= { styles.backgroundImage } source={image}></Image>
            <View style={styles.Lheading}><Text style={{ fontSize: 32, color: 'black', marginTop: 70, fontWeight: 'bold' }}></Text></View>
            <View style={styles.elevation}>
            <View style={styles.inputText}><TextInput placeholder="Full Name"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="email-address" placeholder="Email"></TextInput></View>
            <View style={styles.inputText}><TextInput secureTextEntry={true} placeholder="Password"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="Phone Number"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="Country"></TextInput></View>
            <View style={styles.inputText}><TextInput keyboardType="numeric" placeholder="City"></TextInput></View>
            <View style={styles.inputText1}><Text style={styles.inputBtn}>Blood Group:</Text>
            <Picker style={styles.pickerValue}
            selectedValue={selectedValue}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
            <Picker.Item label="A+" value="A+" />
            <Picker.Item label="A-" value="A-" />
            <Picker.Item label="B+" value="B+" />
            <Picker.Item label="B-" value="B-" />
            <Picker.Item label="AB+" value="AB+" />
            <Picker.Item label="AB-" value="AB-" />
            <Picker.Item label="O+" value="O+" />
            <Picker.Item label="O-" value="O-" />
            </Picker>
            </View>
            <View style={styles.checkboxContainer}>
            <CheckBox value={isSelected} onValueChange={setSelection} style={styles.checkbox} tintColors={{ true: 'black', false: 'white' }} />
            <Text style={styles.label}>I want to be a Donor.</Text>
            </View>
            </View>
            
            {/* <View style={styles.inputText}><TextInput placeholder="Blood group"></TextInput></View> */}
            <View style={styles.btn}><TouchableOpacity activeOpacity={0.8} style={styles.btn1} onPress={()=> props.navigation.navigate("User")}>
                <Text style={styles.btnTxt}>Register</Text>
            </TouchableOpacity></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: -100,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    Lheading: {
        marginBottom: 30,
        fontStyle: 'italic'
    },
    inputText: {
        width: 200,
        height: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    btn1: {
        width: 100,
        height: 40,
        marginTop: 12,
        borderRadius: 20,
        backgroundColor: 'red'
    },
    btnTxt: {
        fontSize: 22,
        textAlign: 'center',
        color: 'white',
        marginTop: 2,
    },
    pickerItem: {
        backgroundColor: 'blue'
    },
    inputText1: {
        flexDirection: 'row',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
    },
    inputBtn: {
        fontSize: 17,
        marginRight: 20,
        marginTop: 15,
        color: 'grey'
    },
    pickerValue: {
        backgroundColor: 'green',
        width: 20
    },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.7,
        height: 250,
        resizeMode: 'contain',
    },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
        color: 'black'
    },
    label: {
        margin: 8,
    }
})

export default Register;