import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function ProfileListItem(props){
    const { profileItem } = props;
    return (
        <View style={styles.container}> 
            <TouchableOpacity 
            style={styles.touchable} 
            activeOpacity={0.5}
            onPress = { () => alert("Click Avata") }
            >
                <Image style={styles.imgAvata} source={profileItem.image}/>
                <Text style={styles.nameAvata}>{profileItem.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        flex: 1,
        margin : 10
    },
    touchable : {
        alignItems : 'center'
    },
    imgAvata : {
        borderRadius : 60/2,
        width : 60,
        height : 60,
        borderWidth : 1,
        borderColor : 'rgba(222, 73, 212, 0.7)',
    },
    nameAvata : {
        fontSize : 13
    }
})