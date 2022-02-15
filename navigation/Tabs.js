import React from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen';

// constants
import { icons, COLORS } from '../constants';

const Tabs = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: COLORS.secondary,
                    height: Platform.OS === 'ios' ? 70 : 80,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                }
            }}
        >
            <Tabs.Screen name="Root" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.home} style={{ width: 24, height: 24, tintColor: focused ? COLORS.white : COLORS.lightGray2 }} />
                    )
                }}
            />
            <Tabs.Screen name="Pinned" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.pin} style={{ width: 24, height: 24, tintColor: focused ? COLORS.white : COLORS.lightGray2 }} />
                    )
                }}
            />
            <Tabs.Screen name="Notifications" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.notification} style={{ width: 24, height: 24, tintColor: focused ? COLORS.white : COLORS.lightGray2 }} />
                    )
                }}
            />
            <Tabs.Screen name="Profile" component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={icons.user} style={{ width: 24, height: 24, tintColor: focused ? COLORS.white : COLORS.lightGray2 }} />
                    )
                }}
            />
        </Tabs.Navigator>
    );
}

export default TabNavigator;

