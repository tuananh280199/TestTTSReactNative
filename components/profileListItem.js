import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export default function ProfileListItem(props){
    const { profileItem } = props;
    return (
        <View style={styles.container}> 
            <Image style={styles.imgAvata} source={profileItem.image}/>
            <Text style={styles.nameAvata}>{profileItem.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        flex: 1,
        margin : 10,
        alignItems : 'center',
    },
    imgAvata : {
        borderRadius : 60/2,
        width : 60,
        height : 60,
        borderWidth : 1,
        borderColor : 'rgba(222, 73, 212, 0.7)'
    },
    nameAvata : {
        fontSize : 13
    }
})