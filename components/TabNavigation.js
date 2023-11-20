import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import CreatePost from '../Screens/CreatePost';
import Settings from '../Screens/Settings';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/color';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: [{ display: 'flex'}, null], // Set the style of the bottom tab bar
            }}
        >
            <Tab.Screen name="Feed" component={Home} options={{
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="home" size={24} color="black" />
                ),
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.primary,
                },
                headerTitleStyle:{
                    color: 'white'
                }
            }}
            />
            <Tab.Screen
                name="Add"
                component={CreatePost}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-add-circle" size={50} color={COLORS.secondary} />
                    ),
                    headerShown: false,
                    tabBarLabel: () => null, // Set tabBarLabel to null to hide the label
                }}
            />
            <Tab.Screen name="About Me" component={Settings} options={{
                tabBarIcon: ({ tintColor }) => (
                    <FontAwesome name="user" size={24} color="black" />
                ),
                headerShown: false
            }} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
