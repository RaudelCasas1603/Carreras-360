import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useAuth } from '../AuthContext';
import COLORS from '../constants/color';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; // Agrega la importación del componente de iconos

export default function Settings() {
    const [userInfo, setUserInfo] = useState(null);
    const { userId, userCarreer, updateUserId, updateUserCarreer } = useAuth();


    useEffect(() => {
        // Función para cargar la información del usuario
        const loadInfo = async () => {
            try {
                const response = await fetch('https://carreras360.000webhostapp.com/loadInfo.php?id='+ userId);
                const data = await response.json();

                // Actualizar el estado con la información del usuario
                setUserInfo(data);
                updateUserCarreer(data.Carrera);
            } catch (error) {
                console.error('Error al cargar la información del usuario:', error);
            }
        };

        

        // Llamar a la función para cargar la información del usuario al montar el componente
        loadInfo();
    }, []); // El segundo parámetro del useEffect ([]) asegura que la función se ejecuta solo al montar el componente

    return (
        <LinearGradient
            style={{
                flex: 1,
            }}
            colors={[COLORS.primary, COLORS.secondary]}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../assets/hero2.jpg')}
                        style={styles.image}
                    />
                </View>
                {userInfo ? (
                    <View style={styles.userInfoContainer}>
                        {/* Mostrar la información del usuario */}
                        <Text style={styles.userInfoText}>
                            <Ionicons name="person" size={24} color={COLORS.white} />
                            {'  '}
                            {userInfo.Nombre}
                        </Text>
                        <Text style={styles.userInfoText}>
                            <Ionicons name="mail" size={24} color={COLORS.white} />
                            {'  '}
                            {userInfo.Correo}
                        </Text>
                        <Text style={styles.userInfoText}>
                            <Ionicons name="ios-checkmark-circle" size={24} color={COLORS.white} />
                            {'  '}
                            {userInfo.Estado}
                        </Text>
                        <Text style={styles.userInfoText}>
                            <Ionicons name="school" size={24} color={COLORS.white} />
                            {'  '}
                            {userInfo.Carrera}
                        </Text>
                        {/* Agrega más campos según la estructura de tu tabla de usuarios */}
                    </View>
                ) : (
                    <Text>Cargando información...</Text>
                )}
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
    },
    imageContainer: {
        position: 'absolute',
        top: 90,

    },
    image: {
        height: 260,
        width: 250,
        borderRadius: 180,
        
    },
    userInfoContainer: {
        marginTop: 90,
        alignItems: 'flex-start',
    },
    userInfoText: {
        textAlign: 'left',
        fontSize: 20,
        marginBottom: 8,
        color: COLORS.white,
    },
});
