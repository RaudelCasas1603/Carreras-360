import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../constants/color';
import {Image} from 'react-native';
import Button from '../components/Button';
const Welcome = ( { navigation } ) => {
    return(
        <LinearGradient
        style={{
                flex:1,
            }}
            colors={[COLORS.primary, COLORS.secondary]}        
        >
            <View>
                <View>
                    <Image
                        source = {require('../assets/hero1.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top:20,
                            transform:[
                                {translateX: 20},
                                {translateY: 50},
                                {rotate: "-16deg"}
                            ]
                        }}
                    />
                    <Image
                        source={require('../assets/hero2.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top:-10,
                            left: 100,
                            transform:[
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "-5deg"}
                            ]
                        }}
                    />

                    <Image
                        source={require('../assets/hero3.jpg')}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 140,
                            left: -50,
                            transform:[
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "15deg"}
                            ]
                        }}
                    />
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={{
                            height: 200,
                            width: 200,
                            borderRadius: 20,
                            position: 'absolute',
                            top: 110,
                            left: 100,
                            transform:[
                                {translateX: 50},
                                {translateY: 50},
                                {rotate: "-15deg"}
                            ]
                        }}
                    />
                </View>

                <View style={{
                    paddingHorizontal:22,
                    position: 'absolute',
                    top: 400,
                    width: '100%'
                }}>
                    <Text style={{
                        fontSize:50,
                        fontWeight: 'bold',
                        color: COLORS.white,
                        marginTop: 50
                    }}>Vamos a </Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 'bold',
                        color: COLORS.white
                    }}>Comenzar</Text>
                    <View style={{marginVertical: 22 }}>
                        <Text style={{
                            fontSize:16,
                            color: COLORS.white,
                            marginVertical:4,
                        }}>Conecta con las opiniones de CUCEI</Text>
                        <Text style={{
                            fontSize:16,
                            color: COLORS.white,
                            marginBottom:50
                        }}>Decide de manera acertada y segura</Text>
                    </View>
                    <Button
                        title="Crear Cuenta"
                        onPress={ () => navigation.navigate('SignUp')}
                        style={{
                            marginTop:22,
                            width: "100%"
                        }}
                    />
                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: 'center'
                    }}>
                        <Text style ={{
                           fontSize: 16,
                            color: COLORS.white, 
                        }}>Ya Tienes una cuenta?</Text>
                        <Pressable
                            onPress={ () => navigation.navigate('Login')}
                        >
                            <Text style={{
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: COLORS.white,
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>
                    </View>
                </View>
            </View>       
        </LinearGradient>
    )
}

export default Welcome;