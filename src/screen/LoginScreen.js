/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import  AsyncStorage  from '@react-native-async-storage/async-storage';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
          const response = await fetch('https://be-rent-car.vercel.app/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: email, // Ganti dengan username yang sesuai
              password: password, // Ganti dengan password yang sesuai
            }),
          });
      
          if (response.ok) {
            const data = await response.json();
                    
            // Simpan token ke AsyncStorage
            await AsyncStorage.setItem('@myApp:token', data.accessToken);
            await AsyncStorage.setItem('@myApp:name', data.name);
      
            // Ganti halaman ke 'Main' setelah berhasil login
            navigation.replace('Main');
          } else {
            console.error('Login failed');
          }
        } catch (error) {
          console.error('Error during login:', error);
        }
      };
      

    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Belum punya akun? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerButtonText}>Daftar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        height: 50,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
        color: '#000'
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        borderRadius: 10,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 16,
    },
    registerText: {
        color: '#aaa',
        fontSize: 16,
    },
    registerButtonText: {
        color: '#007BFF',
        fontSize: 16,
    },
});

export default LoginScreen;
