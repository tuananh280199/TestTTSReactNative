import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Category(props){
    const { category } = props;
    return(
        <View style={styles.container}>
            <Image style={styles.categoryImage} source={category.icon}/>
            <Text style={styles.title}>{category.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : "row",
        alignItems : 'center',
        borderRadius: 50,
        padding : 8,
        backgroundColor : 'rgba(130, 140, 210, 0.36)',
        marginBottom: 16,
        marginLeft: 4,
        marginRight: 4
    },
    categoryImage : {
        width : 24,
        height : 24
    },
    title : {
        textTransform : 'uppercase',
        marginLeft : 4,
        fontWeight: '300'
    }
});