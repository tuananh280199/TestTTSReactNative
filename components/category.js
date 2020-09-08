import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Category(props){
    const { category } = props;
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchable} activeOpacity={0.5}>
                <Image style={styles.categoryImage} source={category.icon}/>
                <Text style={styles.title}>{category.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderRadius: 50,
        padding : 8,
        backgroundColor : 'rgba(130, 140, 210, 0.36)',
        marginBottom: 16,
        marginLeft: 4,
        marginRight: 4
    },
    touchable : {
        flexDirection : "row",
        alignItems : "center"
    },  
    categoryImage : {
        width : 20,
        height : 20
    },
    title : {
        textTransform : 'uppercase',
        marginLeft : 4
    }
});