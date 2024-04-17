import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image} from 'react-native';
import {setIsLogin} from "../../Utils/Utils";
import Images from "../../assets/styles/Images";

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState<boolean>(true);


    const validateUser=()=>{
        if(email !== "admin@siyainfotech.com"){
            Alert.alert('Invalid Email');
        }else if(password !== "123456" ){
            Alert.alert('Invalid Password');
        }else{
            setIsLogin(true)
            navigation.navigate('Dashboard');
        }
    }

    const handleShowPassword=()=>{
        setIsShowPassword(!isShowPassword)
    }

    const handleLogin = () => {
        // Validate email and password
        if (!email || !password) {
            Alert.alert('Please fill  all fields');
            return;
        }

        validateUser()

        // Navigate to Screen 2

    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />

            <View style={styles.input}>

            <TextInput
                style={styles.inputText}
                placeholder="Password"
                secureTextEntry={isShowPassword}
                value={password}
                onChangeText={setPassword}
            />

                <TouchableOpacity style={styles.passView} onPress={handleShowPassword}>
                    <Image style={styles.passImage} source={isShowPassword ? Images.passShow : Images.passHide}/>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    passView:{
        position:'absolute',
        right:10,
        top:15
    },
    passImage:{
        height:20,
        width:20
    },
    inputText:{
        width: '100%',
        height: 50,
    },
    input: {
        position:'relative',
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default Login;