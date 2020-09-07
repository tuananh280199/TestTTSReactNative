import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import multiply from '../assets/multiply.png';
import likeImage from '../assets/heart.png';

export default function Profile(props){
    const { profile } = props;
    return(
        <View style={styles.container}>
            <Image style={styles.profileImage}  source={profile.image}/>
            <View style={styles.info}>
                <Text style={styles.profileName}>{profile.name},{profile.age}</Text>
                <Text style={styles.profileUniversity}>{profile.university}</Text>
            </View>
            <View style={styles.iconGroup}>
                <View style={styles.iconGroup1}>
                    <Image style={styles.iconClose} source={multiply}/>
                </View>
                <View style={styles.iconGroup2}>
                    <Image style={styles.iconHeart} source={likeImage}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        position : "relative",
        marginHorizontal : 15,
        borderRadius: 8,
        backgroundColor : '#FFF',
        shadowColor: '#000',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 0},
        elevation: 8
    },
    profileImage : {
        width : "100%",
        height : 320
    },
    info : {
        margin : 15
    },
    profileName : {
        fontSize : 28
    },
    iconGroup : {
        position : 'absolute',
        marginTop : 295,
        marginLeft : 230,
        flexDirection : 'row',
        alignItems : "center"
    },
    iconGroup1 : {
        backgroundColor : '#FFF',
        width : 50,
        height : 50,
        borderRadius : 50/2,
        shadowColor: '#000',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 0},
        elevation: 8,
        marginRight : 8
    },
    iconGroup2 : {
        backgroundColor : 'rgba(0, 140, 255, 1)',
        width : 50,
        height : 50,
        borderRadius : 50/2,
        shadowColor: '#000',
        shadowOpacity : 0.3,
        shadowRadius : 15,
        shadowOffset : {width : 0, height : 0},
        elevation: 8
    },
    iconClose : {
        width : 20,
        height : 20,
        margin : 15 
    },
    iconHeart : {
        margin : 12, 
        width : 30,
        height : 30,
    }
});