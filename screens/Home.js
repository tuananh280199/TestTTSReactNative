import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Category from '../components/category';
import Profile from '../components/profile';
import ProfileListItem from '../components/profileListItem';

import settingsImage from '../assets/settings.png'; 
import messageImage from '../assets/message.png';
import userImage from '../assets/user.png';
import heartImage from '../assets/heartBlack.png';
import avata from '../assets/avata.png';
import plusImage from '../assets/plus.png';

export default class Home extends Component {
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
            <SafeAreaView>
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                    <View style={styles.header}>
                        <Text style={styles.titleHeader}>Dating</Text>
                        <TouchableOpacity style={styles.backgroundIconSetting} activeOpacity={0.5}>
                            <Image source={settingsImage} style={styles.imgHeader}/>
                        </TouchableOpacity>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      marginTop : 25
    },
    header: {
      flexDirection : 'row',
      marginHorizontal : 15,
      marginTop : 15
    },
    backgroundIconSetting : {
        borderRadius: 50,
        padding : 8,
        backgroundColor : 'rgba(130, 140, 210, 0.36)',
        marginBottom: 16,
        marginLeft: 4,
        marginRight: 4
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
  