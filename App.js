import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/Home';
import WatchesScreen from './screens/Watches';
import GroupsScreen from './screens/Groups';
import LikesScreen from './screens/Like';
import NotificationsScreen from './screens/Notifications';
import SettingsScreen from './screens/Settings';

const Tab = createBottomTabNavigator();

export default class App extends Component {
  render(){
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home';
              }
              else if (route.name === 'Watches'){
                iconName = focused ? 'ios-tv' : 'ios-tv';
              }
              else if (route.name === 'Groups'){
                iconName = focused ? 'ios-people' : 'ios-people';
              }
              else if (route.name === 'Likes'){
                iconName = focused ? 'ios-heart-half' : 'ios-heart-half';
              }
              else if (route.name === 'Notifications'){
                iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
              }
              else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list-box' : 'ios-list';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            showLabel : false
          }}
        >
          <Tab.Screen name="Home" component={Home}/>
          <Tab.Screen name="Watches" component={WatchesScreen} />
          <Tab.Screen name="Groups" component={GroupsScreen} options={{ tabBarBadge: 3 }} />
          <Tab.Screen name="Likes" component={LikesScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarBadge: 1 }} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

