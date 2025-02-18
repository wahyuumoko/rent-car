/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const CarCard = ({ car }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetailCar', { car })} >
            <Image source={{ uri: car.img }} style={styles.image} />
            <Text style={styles.name}>{car.nameCar}</Text>
            <View style={styles.infoContainer}>
                <View style={styles.info}>
                    <Icon name="settings" size={20} color="#D3D3D3" />
                    <Text style={styles.infoText}>{car.transmission}</Text>
                </View>
                <View style={styles.info}>
                    <Icon name="people" size={20} color="#D3D3D3" />
                    <Text style={styles.infoText}>{car.passenger}</Text>
                </View>
                <View style={styles.info}>
                    <Icon name="local-gas-station" size={20} color="#D3D3D3" />
                    <Text style={styles.infoText}>{car.oil}</Text>
                </View>
                {car.driver ? <View style={styles.info}>
                    <Icon name="person" size={20} color="#32CD32" />
                    <Text style={styles.infoDriver}>Sopir</Text>
                </View> : null}
            </View>
            <Text style={styles.price}>{`Rp ${car.price} /Hari`}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 280,
        marginRight: 15,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        marginBottom: 15,
    },
    image: {
        width: '100%',
        height: 150,
        resizeMode: 'contain',
    },
    name: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },
    infoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '48%',
        marginBottom: 5,
    },
    infoText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#D3D3D3',
    },
    price: {
        paddingHorizontal: 10,
        paddingBottom: 10,
        fontSize: 19,
        fontWeight: 'bold',
        color: '#000',
    },
    infoDriver: {
        color: '#32CD32',
    }
});

export default CarCard;
