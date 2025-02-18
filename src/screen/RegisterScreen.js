/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureConfirmTextEntry, setSecureConfirmTextEntry] = useState(true);
    const [emailErrorMessage, setEmailErrorMessage] = useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = useState('');

    const handleRegister = () => {
        let hasError = false;
        if (!email) {
            setEmailErrorMessage('Email harus diisi.');
            hasError = true;
        } else {
            setEmailErrorMessage('');
        }

        if (!password) {
            setPasswordErrorMessage('Password harus diisi.');
            hasError = true;
        } else {
            setPasswordErrorMessage('');
        }

        if (!confirmPassword) {
            setConfirmPasswordErrorMessage('Konfirmasi password harus diisi.');
            hasError = true;
        } else if (confirmPassword !== password) {
            setConfirmPasswordErrorMessage('Password tidak cocok.');
            hasError = true;
        } else {
            setConfirmPasswordErrorMessage('');
        }

        if (hasError) {
            return;
        }

        navigation.replace('Login');
    };

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const toggleConfirmSecureEntry = () => {
        setSecureConfirmTextEntry(!secureConfirmTextEntry);
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconAndTitleContainer}>
                <Icon name="car-side" size={120} color="#000" style={styles.carIcon} />
                <Text style={styles.title}>Register</Text>
            </View>
            <TextInput
                style={[styles.input, emailErrorMessage && styles.errorInput]}
                placeholder={emailErrorMessage ? emailErrorMessage : "Email"}
                placeholderTextColor={emailErrorMessage ? 'red' : '#aaa'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.passwordInput, passwordErrorMessage && styles.errorInput]}
                    placeholder={passwordErrorMessage ? passwordErrorMessage : "Password"}
                    placeholderTextColor={passwordErrorMessage ? 'red' : '#aaa'}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
                    <Icon name={secureTextEntry ? 'eye-off' : 'eye'} size={20} color="#aaa" />
                </TouchableOpacity>
            </View>
            <View style={styles.conPasswordContainer}>
                <TextInput
                    style={[styles.passwordInput, confirmPasswordErrorMessage && styles.errorInput]}
                    placeholder={confirmPasswordErrorMessage ? confirmPasswordErrorMessage : "Confirm Password"}
                    placeholderTextColor={confirmPasswordErrorMessage ? 'red' : '#aaa'}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={secureConfirmTextEntry}
                />
                <TouchableOpacity onPress={toggleConfirmSecureEntry} style={styles.eyeIcon}>
                    <Icon name={secureConfirmTextEntry ? 'eye-off' : 'eye'} size={20} color="#aaa" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Sudah punya akun? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerButtonText}>Masuk</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 75,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    iconAndTitleContainer: {
        alignItems: 'center',
        marginBottom: 24,
    },
    carIcon: {
        marginBottom: 50,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
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
        color: '#000',
    },
    errorInput: {
        borderColor: 'red',
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 16,
        backgroundColor: '#f9f9f9',
    },
    conPasswordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 35,
        backgroundColor: '#f9f9f9',
    },
    passwordInput: {
        flex: 1,
        height: 50,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#000',
    },
    eyeIcon: {
        padding: 10,
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
        fontWeight: 'bold',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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

export default RegisterScreen;
