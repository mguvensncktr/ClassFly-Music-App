import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//screens
import HomeScreen from '../screens/HomeScreen';


const Tabs = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={HomeScreen} />
            <Tabs.Screen name="Pinned" component={HomeScreen} />
            <Tabs.Screen name="Notifications" component={HomeScreen} />
            <Tabs.Screen name="Profile" component={HomeScreen} />
        </Tabs.Navigator>
    );
}

export default TabNavigator;
