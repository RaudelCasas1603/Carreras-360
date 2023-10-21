import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import COLORS from '../constants/color';
import {Image} from 'react-native';


const Welcome2 = ( { route } ) => {
    const Usuario = route.params.nombreUsuario;
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
                    }}>Bienvenido</Text>
                    <Text style={{
                        fontSize: 46,
                        fontWeight: 'bold',
                        color: COLORS.white
                    }}> {Usuario}</Text>
                   
                </View>
            </View>       
        </LinearGradient>
    )
}

export default Welcome2;