import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Category from './components/category';
import Profile from './components/profile';
import ProfileListItem from './components/profileListItem';

import settingsImage from './assets/settings.png'; 
import messageImage from './assets/message.png';
import userImage from './assets/user.png';
import heartImage from './assets/heart.png';
import avata from './assets/avata.png';
import plusImage from './assets/plus.png'

class Home extends Component {
  constructor(props){
    super(props);

    this.state = {
        categories : [
            {id : 1, title : "Profile" , icon : userImage},
            {id : 2, title : "Liked You" , icon : heartImage},
            {id : 3, title : "Message" , icon : messageImage}
        ],
        profiles : [
            {id : 1, name : "Add Story" , age : 0, image : plusImage, university : ""},
            {id : 2, name : "Vân Anh" , age : 20, image : avata, university : "Trường Cao đẳng sư phạm Hà Nội"},
            {id : 3, name : "Vân Anh" , age : 20, image : avata, university : "Trường Cao đẳng sư phạm Hà Nội"},
            {id : 4, name : "Vân Anh" , age : 20, image : avata, university : "Trường Cao đẳng sư phạm Hà Nội"},
            {id : 5, name : "Vân Anh" , age : 20, image : avata, university : "Trường Cao đẳng sư phạm Hà Nội"}
        ]
    }  
  };
  render(){
    const { categories, profiles } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titleHeader}>Dating</Text>
          <Image source={settingsImage} style={styles.imgHeader}/>
        </View>
        <FlatList 
          data={categories}
          contentContainerStyle={styles.Categories}
          numColumns={3}
          renderItem={ ({item}) => 
            <Category category={item} />
          }
          keyExtractor={ (item) => `${item.id}`}
        />
        <View>
          <Profile profile={profiles[1]}/>
        </View>
        <View style={styles.line}/>
        <View>
          <Text style={styles.suggestedStories}>Suggested Stories</Text>
        </View>
        <FlatList
          data={profiles}
          contentContainerStyle={styles.renderProfile}
          numColumns={5}
          renderItem = { ({item}) => 
            <ProfileListItem profileItem={item} />
          }
          keyExtractor={ (item) => `${item.id}`}
        />
      </View>
    );
  }
}

function WatchesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Watches</Text>
    </View>
  );
}

function GroupsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Groups</Text>
    </View>
  );
}

function LikeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Likes</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

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
                iconName = focused ? 'ios-desktop' : 'ios-desktop';
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
          <Tab.Screen name="Likes" component={LikeScreen} />
          <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarBadge: 1 }} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop : 25
  },
  header: {
    flexDirection : 'row',
    margin : 15
  },
  titleHeader : {
    flex : 1,
    fontSize : 28,
    fontWeight : "700"
  },
  imgHeader : {
    width : 28,
    height : 28
  },
  Categories : {
    marginHorizontal : 10
  },
  line : {
    borderWidth : 0.2,
    borderColor : 'black',
    marginHorizontal : 15,
    marginTop : 20,
    marginBottom : 10
  },
  suggestedStories : {
    fontSize : 21,
    fontWeight : '700',
    marginLeft : 15
  }
});
